import { useEffect, useState, useRef } from "react";
import { RECENTLY_PLAYED_ENDPOINT } from "@/app/constants";
import { Box, Link, Spinner, Stack, Text, Image, Tooltip } from "@chakra-ui/react";
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
  const [tracks, setTracks] = useState<Track[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchRecentTracks = () => {
      if (!isMounted.current) return;
      fetch(RECENTLY_PLAYED_ENDPOINT)
        .then(response => response.json())
        .then((results: Track[]) => {
          if (!isMounted.current) return;
          setTracks(results);
          setLoading(false);
          setTimeout(fetchRecentTracks, 10000);
        })
        .catch(error => {
          console.error('Error fetching recently played tracks:', error);
          if (!isMounted.current) return;
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
      {loading ? (
        <Stack align="center" mb={8}>
          <Spinner size="md" speed="0.6s" thickness="3" color="gray.500" />
        </Stack>
      ) : (
        <Stack width="full" spacing={3}>
          <Stack spacing={2} direction="row" align="center">
            <SpotifyLogo />
            <Text fontWeight="semibold">Recently Played</Text>
          </Stack>
          {tracks.map((track, index) => (
            <Box key={index} p={2} borderRadius="lg" borderWidth={1}>
              <Stack direction="row" spacing={4} align="center">
                <Image
                  alt={`${track.title} album art`}
                  src={track.albumImageUrl}
                  width={12}
                  height={12}
                  borderRadius="sm"
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
    </Box>
  );
};

export default SpotifyRecentTracks;