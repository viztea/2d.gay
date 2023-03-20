<script>
    import { languages, projects, email, discord } from "./about";

    /* components */
    import Icon from "@iconify/svelte";
    import Seo from "../lib/components/seo.svelte";
</script>

<Seo title="home" />

<div class="space-y-8">
    <section class="space-y-4">
        <div class="flex space-x-4 items-center">
            <img src="/img.avif" alt="logo-ish?" class="w-16 h-16 rounded-full" />
            <div class="flex flex-col">
                <h1 class="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">Gino</h1>
                <span class="text-zinc-100 text-sm sm:text-base">A full-stack developer from California.</span>
            </div>
        </div>
    
        <p>
            I've been coding since I was <strong>13</strong>. My primary 
            languages are Kotlin and TypeScript, but I also use Go and Rust.
        </p>
    
        <p>
            I also do some web development with React, Vue, and Svelte. 
            Want to know a fun fact? I've rewritten my portfolio almost 
            a dozen times, rotating between HTML/CSS, <a href="https://www.gatsbyjs.com">Gatsby</a>, <a href="https://nextjs.org">Next.js</a>, and <a href="https://kit.svelte.dev">SvelteKit</a>.
        </p>
    </section>

    <section class="space-y-2">
        <h2 class="font-black text-xl mb-4">Projects</h2>

        <ul class="space-y-2">
            {#each projects as project}
                <li class="bg-zinc-800 px-3.5 py-2.5 shadow-xl rounded-md border border-zinc-700">
                    <div class="mb-2">
                        <div class="flex justify-between">
                            <h3 class="text-lg font-semibold">
                                {project.name}
                            </h3>
                            <div class="flex space-x-2 text-lg items-center">
                                {#each project.links as link}
                                    <a href={link.url} title={link.name}>
                                        <Icon icon={link.icon} />
                                    </a>
                                {/each}
                            </div>
                        </div>
                        <p class="!text-sm">{project.description}</p>
                    </div>

                    <ul class="flex space-x-2">
                        {#each project.languages as language}
                            {@const meta = languages[language]}
                            <li class="flex space-x-2 items-center">
                                <!-- <div
                                    class="rounded-full p-2"
                                    style="background-color: {meta.color}"
                                />
                                <span class="text-zinc-100/80 text-sm">
                                    {language}
                                </span> -->
                                <Icon class="hover:text-[{meta.color}]" icon={meta.icon} />
                            </li>
                        {/each}
                    </ul>
                </li>
            {/each}
        </ul>
    </section>

    <section class="space-y-2">
        <h2 class="font-black text-xl mb-2">Contact</h2>

        <p>
            If you need to contact me, I recommend joining my <a href={discord}>Discord server</a> for the quickest response.
        </p>

        <p>
            However, you can always email me at <a href="mailto:{email}">{email}</a> but do not expect a quick response.
        </p>
    </section>
</div>

<style>
    p {
        @apply prose prose-invert;
    }
</style>
