import {NextApiRequest, NextApiResponse} from "next";
import {getRecentlyPlayed} from "@/components/Spotify/SpotifyAPI";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const recentlyPlayed = await getRecentlyPlayed();
		res.status(200).json(recentlyPlayed);
	} catch (error) {
		res.status(500).json({
			error: 'Failed to fetch currently playing track'
		});
	}
}