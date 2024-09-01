import axios from 'axios';

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const TOKEN_CACHE_DURATION = 59 * 60 * 1000; // 59 minutes in milliseconds
const TRACK_CACHE_DURATION = 1000; // 1 second in milliseconds
const RECENTLY_PLAYED_CACHE_DURATION = 60 * 1000; // 1 minute in milliseconds

let tokenCache = {
  accessToken: '',
  lastFetched: 0,
};

let trackCache = {
  track: null as Track | null,
  lastFetched: 0,
};

let recentlyPlayedCache = {
  tracks: [] as Track2[],
  lastFetched: 0,
};

const getSpotifyTokens = () => {
  return {
    clientId: process.env.NEXT_SPOTIFY_CLIENT_ID!,
    clientSecret: process.env.NEXT_SPOTIFY_CLIENT_SECRET!,
    refreshToken: process.env.NEXT_SPOTIFY_REFRESH_TOKEN!,
  };
};

const getAccessToken = async () => {
  const now = Date.now();

  // Check if the cache is still valid
  if (tokenCache.accessToken && tokenCache.lastFetched + TOKEN_CACHE_DURATION > now) {
    return tokenCache.accessToken;
  }

  try {
    const { clientId, clientSecret, refreshToken } = getSpotifyTokens();

    const response = await axios.post(TOKEN_ENDPOINT, null, {
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
    });

    const { access_token } = response.data;

    // Update the cache
    tokenCache = {
      accessToken: access_token,
      lastFetched: now,
    };

    return access_token;
  } catch (error) {
    throw new Error('Failed to fetch access token');
  }
};

interface Track {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
  progress_ms: number;
  duration_ms: number;
}

interface Track2 {
  albumImageUrl: string;
  artist: string;
  playedAt: string;
  songUrl: string;
  title: string;
}

const getCurrentlyPlaying = async () => {
  const now = Date.now();

  // Check if the cache is still valid
  if (trackCache.track && trackCache.lastFetched + TRACK_CACHE_DURATION > now) {
    return trackCache.track;
  }

  const accessToken = await getAccessToken();

  const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = response.data;

  const track = {
    albumImageUrl: data.item.album.images[0].url,
    artist: data.item.artists.map((artist: any) => artist.name).join(', '),
    isPlaying: data.is_playing,
    songUrl: data.item.external_urls.spotify,
    title: data.item.name,
    progress_ms: data.progress_ms,
    duration_ms: data.item.duration_ms,
  };

  // Update the cache
  trackCache = {
    track,
    lastFetched: now,
  };

  return track;
}

const getRecentlyPlayed = async () => {
  const now = Date.now();

  // Check if the cache is still valid
  if (recentlyPlayedCache.tracks.length > 0 && recentlyPlayedCache.lastFetched + RECENTLY_PLAYED_CACHE_DURATION > now) {
    return recentlyPlayedCache.tracks;
  }

  const accessToken = await getAccessToken();

  const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = response.data;

  const tracks = data.items.map((item: any) => ({
    albumImageUrl: item.track.album.images[0].url,
    artist: item.track.artists.map((artist: any) => artist.name).join(', '),
    playedAt: item.played_at,
    songUrl: item.track.external_urls.spotify,
    title: item.track.name,
  }));

  // Update the cache
  recentlyPlayedCache = {
    tracks,
    lastFetched: now,
  };

  return tracks;
}

export { getAccessToken, getCurrentlyPlaying, getRecentlyPlayed };