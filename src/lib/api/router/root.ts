import { t } from "../trpc";
import { lastFmRouter } from "./lastfm";

export const router = t.router({
    time: t.procedure.query(() => Date.now()),
    //
    lastFm: lastFmRouter
});

export type Router = typeof router;
