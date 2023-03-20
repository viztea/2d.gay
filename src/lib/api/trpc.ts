import { initTRPC } from "@trpc/server";
import type { Context } from "./ctx";

export const t = initTRPC
    .context<Context>()
    .create();
