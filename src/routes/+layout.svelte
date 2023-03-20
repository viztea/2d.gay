<script lang="ts">
    import "../app.css";
    import type { LayoutData } from './$types'

    /* components */
    import { QueryClientProvider } from "@tanstack/svelte-query";
    import Footer from "$lib/components/footer.svelte";

    export let data: LayoutData;
</script>

<QueryClientProvider client={data.queryClient}>
    <div class="flex py-14">
        <div class="mx-auto px-4 max-w-[535px]">
            <slot />

            <Footer />
        </div>
    </div>
</QueryClientProvider>
