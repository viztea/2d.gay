import type { Router } from "$lib/api/router/root";
import { createTRPCClient, type TRPCClientInit } from "trpc-sveltekit";

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export function trpc(init?: TRPCClientInit) {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser && browserClient) {
        return browserClient;
    }

    const client = createTRPCClient<Router>({ init });
    if (isBrowser) {
        browserClient = client;
    }

    return client;
}
