<script lang="ts">
    import { email, discord } from "../../routes/about";

    /* components */
    import Icon from "@iconify/svelte";
    import Track from "./track.svelte";

    const date = new Date();
</script>

<footer
    class="flex flex-col space-y-2 mt-8 text-zinc-200/70 text-xs"
>
    <Track />
    <div class="flex items-center justify-between">
        <span class="hover:text-zinc-100/90 transition ease-in-out select-none">
            melike2d &copy; 2018 - {date.getFullYear()}
        </span>
        <div class="flex space-x-2 items-center text-lg">
            <a
                class="hover:text-zinc-100/90 transition ease-in-out"
                href="mailto:{email}"
                title="Send me an Email"
            >
                <Icon icon="ri:mail-fill" />
            </a>
            <a
                class="hover:text-zinc-100/90 transition ease-in-out text-xl"
                href={discord}
                title="Discord Server"
            >
                <Icon icon="ri:discord-fill" />
            </a>
            <a
                class="hover:text-zinc-100/90 transition ease-in-out text-xl"
                href="https://twitter.com/melike2d"
                title="Twitter Account"
            >
                <Icon icon="ri:twitter-fill" />
            </a>
            <a
                class="hover:text-zinc-100/90 transition ease-in-out text-xl"
                href="https://github.com/melike2d"
                title="GitHub Profile"
            >
                <Icon icon="ri:github-fill" />
            </a>
        </div>
    </div>
</footer>
