import { env } from "$env/dynamic/private";
import { type Track, recentTracks } from "$lib/tools/lastfm";
import { z } from "zod";
import { t } from "../trpc";

async function fetchCurrentTrack(): Promise<Track | null> {
    const query = new URLSearchParams({
        method: "user.getrecenttracks",
        user: env.LAST_FM_USERNAME,
        api_key: env.LAST_FM_APIKEY,
        format: "json",
        limit: "1",
    });

    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?${query}`)
        .then(r => r.json())
        .then(recentTracks.parse);

    const latest = response.recenttracks.track[0] ?? null;
    return latest?.["@attr"]?.nowplaying != true
        ? null
        : latest;
}

// TODO: rate-limiting & caching...

export const lastFmRouter = t.router({
    currentTrack: t.procedure
        .output(z.object({
            title: z.string(),
            artist: z.string(),
            album: z.string(),
            artwork: z.string().url().nullable(),
            url: z.string().url(),
        }).nullable())
        .query(async () => {
            const current = await fetchCurrentTrack();
            if (!current) {
                return null;
            }

            return {
                title:   current.name,
                artist:  current.artist["#text"],
                album:   current.album["#text"],
                artwork: current.image[current.image.length - 1]?.["#text"] ?? null,
                url:     current.url,
            }
        })
});
