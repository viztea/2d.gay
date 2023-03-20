import { t } from "../trpc";

export const router = t.router({
    time: t.procedure.query(() => Date.now()),
});

export type Router = typeof router;
