// hooks.server.ts
import { createContext } from "$lib/api/ctx";
import { router } from "$lib/api/router/root";
import type { Handle } from "@sveltejs/kit";
import { createTRPCHandle } from "trpc-sveltekit";

export const handle: Handle = createTRPCHandle({ router, createContext });
