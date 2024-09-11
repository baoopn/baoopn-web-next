import { useEffect, useState, useRef } from "react";
import { RECENTLY_PLAYED_ENDPOINT } from "@/app/constants";
import { Box, Link, Spinner, Stack, Text, Image, Tooltip, Flex } from "@chakra-ui/react";
import SpotifyLogo from "@/components/Spotify/SpotifyLogo";

// Define the type for the track data
interface Track {
  albumImageUrl: string;
  artist: string;
  playedAt: string;
  songUrl: string;
  title: string;
}

const SpotifyRecentTracks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // New state variable for error tracking
  const [tracks, setTracks] = useState<Track[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchRecentTracks = () => {
      if (!isMounted.current) return;
      fetch(RECENTLY_PLAYED_ENDPOINT)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok'); // Handle non-200 responses
          }
          return response.json();
        })
        .then((results: Track[]) => {
          if (!isMounted.current) return;
          setTracks(results);
          setLoading(false);
          setError(false); // Reset error state on successful fetch
          setTimeout(fetchRecentTracks, 10000);
        })
        .catch(error => {
          console.error('Error fetching recently played tracks:', error);
          if (!isMounted.current) return;
          setLoading(false); // Stop loading on error
          setError(true); // Set error state to true
          setTimeout(fetchRecentTracks, 2000);
        });
    };

    fetchRecentTracks();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Box width="xs">
      {loading ? ( // Show spinner while loading
        <Flex direction="column" alignItems="center" justifyContent="center" height="100%">
          <Spinner size="md" />
          <Text mt={2}>Loading Recent Tracks...</Text>
        </Flex>
      ) : (
        <>
          {error && ( // Render error message if there's an error
            <Text color="red.500" textAlign="center" mb={4}>
              Failed to load recently played tracks. Please try again later.
            </Text>
          )}
          {/* Render the Box only if loading is false and no error occurred */}
          {!error && (
            <Stack width="full" spacing={2}>
              <Stack spacing={2} direction="row" align="center">
                <SpotifyLogo />
                <Text fontWeight="semibold">Recently Played</Text>
              </Stack>
              {tracks.map((track, index) => (
                <Box key={index} py={2} px={2} borderRadius="lg" borderWidth={1}>
                  <Stack direction="row" spacing={3} align="center">
                    <Image
                      alt={`${track.title} album art`}
                      src={track.albumImageUrl}
                      width={12}
                      height={12}
                      borderRadius="md"
                    />
                    <Stack spacing={0} overflow="hidden">
                      <Tooltip label={track.title} hasArrow>
                        <Link href={track.songUrl} alignSelf="self-start" isExternal>
                          <Text
                            fontWeight="semibold"
                            width="full"
                            isTruncated
                            color="alph"
                          >
                            {track.title}
                          </Text>
                        </Link>
                      </Tooltip>
                      <Tooltip label={track.artist} hasArrow>
                        <Text
                          color="gray.500"
                          isTruncated
                          alignSelf="self-start"
                        >
                          {track.artist}
                        </Text>
                      </Tooltip>
                      <Text></Text>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          )}
        </>
      )}
    </Box>
  );
};

export default SpotifyRecentTracks;