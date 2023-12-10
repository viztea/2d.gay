<script lang="ts">
    import { createQuery } from "@tanstack/svelte-query";
    import { trpc } from "$lib/api/client";

    /* stores */
    import { page } from "$app/stores";
    import Icon from "@iconify/svelte";
    import Spinner from "./spinner.svelte";

    const track = createQuery({
        queryKey: ["current-track"],
        queryFn: () => trpc($page).lastFm.currentTrack.query(),
    });
</script>

<!-- TODO: clean this up... -->

<div class="flex items-center space-x-2">
    <Icon class="text-base" icon="simple-icons:lastdotfm" />
    {#if $track.isLoading}
        <span class="text-base"><Spinner /></span>
    {:else if $track.isError}
        <div class="flex items-center space-x-2">
            <span class="font-semibold text-red-400">Unable to fetch current track...</span>
            {#if $track.isFetching}
                <span class="text-base"><Spinner /></span>
            {/if}
        </div>
    {:else if $track.data}
        <span class="flex items-center space-x-1">
            <span>
                <a class="font-semibold hover:underline" href={$track.data.url}>{$track.data.title}</a> by
                <a class="font-semibold hover:underline" href={$track.data.artist.url}>{$track.data.artist.name}</a>
            </span>
            {#if $track.data.loved}
                <Icon class="text-base text-red-400" icon="mdi:cards-heart" />
            {/if}
        </span>
    {:else}
        <div class="flex items-center space-x-2">
            <span>I'm not listening to anything right now.</span>
            {#if $track.isFetching}
                <span class="text-md"><Spinner /></span>
            {/if}
        </div>
    {/if}
</div>
