// File: src/pages/api/spotify/currently-playing.tsx
import { NextApiRequest, NextApiResponse } from 'next';
import {getCurrentlyPlaying} from "@/components/Spotify/SpotifyAPI";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const currentlyPlaying = await getCurrentlyPlaying();
    res.status(200).json(currentlyPlaying);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch currently playing track' });
  }
}