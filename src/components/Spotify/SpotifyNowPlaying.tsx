import { useEffect, useState, useRef } from "react";
import { CURRENTLY_PLAYING_ENDPOINT } from "@/app/constants";
import { Box, Spinner, Stack, Text, Link, Progress, Image, Tooltip, Flex } from "@chakra-ui/react";
import SpotifyLogo from "@/components/Spotify/SpotifyLogo";
import PlayingAnimation from "@/components/Spotify/PlayingAnimation";

const SpotifyNowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // New state variable for error tracking
  const [track, setTrack] = useState({
    albumImageUrl: '',
    artist: '',
    duration_ms: 0,
    isPlaying: false,
    progress_ms: 0,
    songUrl: '',
    title: '',
  });

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchCurrentlyPlaying = () => {
      if (!isMounted.current) return;
      fetch(CURRENTLY_PLAYING_ENDPOINT)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle non-200 responses
          }
          return response.json();
        })
        .then(track => {
          if (!isMounted.current) return;
          setTrack(track);
          setLoading(false);
          setError(false); // Reset error state on successful fetch
          setTimeout(fetchCurrentlyPlaying, 1000);
        })
        .catch(error => {
          console.error('Error fetching currently playing track:', error);
          if (!isMounted.current) return;
          setLoading(false); // Stop loading on error
          setError(true); // Set error state to true
          setTimeout(fetchCurrentlyPlaying, 2000);
        });
    };

    fetchCurrentlyPlaying();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Box width="xs">
      {loading ? ( // Show spinner while loading
        <Flex direction="column" alignItems="center" justifyContent="center" height="100%">
          <Spinner size="md" />
          <Text mt={2}>Loading Current Track...</Text>
        </Flex>
      ) : (
        <>
          {error && ( // Render error message if there's an error
            <Text color="red.500" textAlign="center" mb={4}>
              Failed to load currently playing track. Please try again later.
            </Text>
          )}
          {/* Render the Box only if loading is false and no error occurred */}
          {!error && (
            <Stack width="full" mb={track.isPlaying ? 2 : 4} spacing={2}>
              <Stack spacing={2} direction="row" align="center">
                <SpotifyLogo />
                <Text fontWeight="semibold">{track.isPlaying ? 'Now Playing' : 'Currently Offline'}</Text>
                {track.isPlaying && <PlayingAnimation />}
              </Stack>
              {!track.isPlaying &&
                <Box p={4} borderRadius="lg" borderWidth={1}>
                  <Stack direction="column" spacing={1} align="center" textAlign="center">
                    <Image
                      src={`https://cdn.baoopn.com/data/img/Baoo-404.png`}
                      alt={`Bao's Image`}
                      width={72}
                      height={72}
                      borderRadius="full"
                      backgroundColor="var(--primary-pink)"
                      border={`8px solid var(--light-background)`}
                    />
                    <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      width="full"
                      color="alph"
                      mt={4}
                    >
                      Bao isn&apos;t listening right now.
                    </Text>
                  </Stack>
                </Box>
              }
              {track.isPlaying &&
                <Box p={4} borderRadius="lg" borderWidth={1}>
                  <Stack direction="column" spacing={4} align="center">
                    <Box position="relative">
                      <Image
                        src={track.albumImageUrl}
                        alt={`${track.title} by ${track.artist}`}
                        width={64}
                        height={64}
                        borderRadius="50%"
                        className="rotating-disk"
                      />
                      <div className="center-circle"></div>
                      <div className="smaller-white-circle"></div>
                    </Box>
                    <Stack spacing={1} overflow={"hidden"} width="full">
                      <Tooltip label={track.title} alignSelf="self-start" hasArrow>
                        <Link href={track.songUrl} alignSelf="self-start" isExternal>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            width="full"
                            isTruncated
                            color="alph"
                          >
                            {track.title}
                          </Text>
                        </Link>
                      </Tooltip>
                      <Tooltip label={track.artist} alignSelf="self-start" hasArrow>
                        <Text
                          color="gray.500"
                          isTruncated
                          fontSize="md"
                          alignSelf="self-start"
                          mt={-2}
                        >
                          {track.artist}
                        </Text>
                      </Tooltip>
                      <Progress
                        size="xs"
                        colorScheme="green"
                        borderRadius="md"
                        value={(track.progress_ms / track.duration_ms) * 100}
                      />
                    </Stack>
                  </Stack>
                </Box>
              }
            </Stack>
          )}
        </>
      )}
    </Box>
  );
}

export default SpotifyNowPlaying;