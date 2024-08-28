import { ChakraProvider, Box, Flex, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "@/components/Spotify/ColorModeSwitcher";
import SpotifyNowPlaying from "@/components/Spotify/SpotifyNowPlaying";
import SpotifyRecentTracks from "@/components/Spotify/SpotifyRecentTracks";
import '@/app/globals.css'
import Head from "next/head";

// Create a custom theme
const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        "@media (prefers-color-scheme: light)": {
          backgroundColor: "#fff5eb",
        },
      },
    },
  },
});

const NowListening = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>What&apos;s Bao is listening to?</title>
        <link rel="icon" href="https://cdn.baoopn.com/data/img/baoo_spotify.ico"/>
      </Head>
      <Box textAlign="right" p={3}>
        <ColorModeSwitcher/>
      </Box>

      <Flex direction="column" justifyContent="center" align="center" minHeight="90vh" mb={6} py={4}>
        <Box textAlign="start" mb={6} mx={12}>
          <h1>Explore the tracks I&apos;m listening to right now and check out my recent Spotify activity.</h1>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="top" gap={6} overflowY={{ base: "auto", md: "hidden" }} overflowX="auto">
          <SpotifyNowPlaying />
          <SpotifyRecentTracks />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default NowListening;