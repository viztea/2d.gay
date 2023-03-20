import { env } from "$env/dynamic/private";
import { type Track, recentTracks } from "$lib/tools/lastfm";
import { z } from "zod";
import { t } from "../trpc";

let currentTrack: Track | null = null;

async function fetchCurrentTrack() {
    try {
        const query = new URLSearchParams({
            method: "user.getrecenttracks",
            user: env.VITE_LAST_FM_USERNAME,
            api_key: env.VITE_LAST_FM_APIKEY,
            format: "json",
            limit: "1",
        });
    
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`)
            .then(r => r.json())
            .then(recentTracks.parse);
    
        const latest = response.recenttracks.track[0] ?? null;
        if (latest?.["@attr"]?.nowplaying != true) {
            currentTrack = null;
            return;
        }
    
        currentTrack = latest;
    } catch (ex) {
        console.error("Unable to fetch recent tracks:", ex);
    }
}

// TODO: properly schedule this, maybe using upstash idk...

/* every 5 minutes fetch the current track. */
fetchCurrentTrack();
setInterval(fetchCurrentTrack, 1000 * 60);

export const lastFmRouter = t.router({
    currentTrack: t.procedure
        .output(z.object({
            title: z.string(),
            artist: z.string(),
            album: z.string(),
            artwork: z.string().url().nullable(),
            url: z.string().url(),
        }).nullable())
        .query(() => {
            if (!currentTrack) {
                return null;
            }

            return {
                title: currentTrack.name,
                artist: currentTrack.artist["#text"],
                album: currentTrack.album["#text"],
                artwork: currentTrack.image[currentTrack.image.length - 1]?.["#text"] ?? null,
                url: currentTrack.url,
            }
        })
});
