<script lang="ts">
    /* stores */
    import { updated, page } from "$app/stores";

    export let title: string | null = null;
    export let description = "A full-stack developer from California.";

    let prefixedTitle = title ? `${title} • 2d.gay` : "2d.gay";
    let url = "https://2d.gay" + $page.url.pathname;
    $: if (updated) {
        prefixedTitle = title ? `${title} • 2d.gay` : "2d.gay";
        url = "https://2d.gay" + $page.url.pathname;
    }
</script>

<svelte:head>
<!-- title -->
<title>{prefixedTitle}</title>
<meta property="og:title" content={prefixedTitle} />
<meta property="twitter:title" content={prefixedTitle} />

<!-- description -->
<meta name="description" content={description} />
<meta property="og:description" content={description} />
<meta property="twitter:description" content={description} />

<!-- url -->
<link rel="canonical" href={url}>
<meta property="og:url" content={url} />
<meta property="twitter:url" content={url} />
</svelte:head>
