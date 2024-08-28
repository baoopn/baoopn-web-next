import { useEffect, useState, useRef } from "react";
import { CURRENTLY_PLAYING_ENDPOINT } from "@/app/constants";
import { Box, Spinner, Stack, Text, Link, Progress, Image, Tooltip } from "@chakra-ui/react";
import SpotifyLogo from "@/components/Spotify/SpotifyLogo";
import PlayingAnimation from "@/components/Spotify/PlayingAnimation";

const SpotifyNowPlaying = () => {
  const [loading, setLoading] = useState(true);
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
        .then(response => response.json())
        .then(track => {
          if (!isMounted.current) return;
          setTrack(track);
          setLoading(false);
          setTimeout(fetchCurrentlyPlaying, 1000);
        })
        .catch(error => {
          console.error('Error fetching currently playing track:', error);
          if (!isMounted.current) return;
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
      {loading ?
        <Stack align="center" mb={8}>
          <Spinner size="md" speed="0.6s" thickness="3" color="gray.500" />
        </Stack>
        :
        <Stack width="full" mb={track.isPlaying ? 2 : 4} spacing={3}>
          <Stack spacing={2} direction="row" align="center">
            <SpotifyLogo />
            <Text fontWeight="semibold">{track.isPlaying ? 'Now Playing' : 'Currently Offline'}</Text>
            {track.isPlaying && <PlayingAnimation />}
          </Stack>
          {!track.isPlaying &&
            <Box p={4} borderRadius="lg" borderWidth={1}>
              <Stack direction="column" spacing={1} align="center">
                <Image
                  src={`https://cdn.baoopn.com/data/img/Baoo.png`}
                  alt={`Bao's Image`}
                  width={72}
                  height={72}
                  borderRadius="md"
                />
                <Text
                  fontWeight="semibold"
                  fontSize="lg"
                  width="full"
                  color="alph"
                >
                  Bao isn&apos;t listening to anything right now.
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
                        fontSize="x-large"
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
                      alignSelf="self-start"
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
      }
    </Box>
  )
}

export default SpotifyNowPlaying;