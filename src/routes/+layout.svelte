<script lang="ts">
    import "../app.css";
    import { email, discord } from "./about";

    /* components */
    import Icon from "@iconify/svelte";

    const date = new Date();
</script>

<div class="flex h-screen py-14">
    <div class="mx-auto px-4 max-w-[535px]"> 
        <slot />

        <footer class="flex my-4 items-center text-zinc-200/70 justify-between transition ease-in-out text-xs">
            <span class="hover:text-zinc-100/90 select-none">melike2d &copy; 2018 - {date.getFullYear()}</span>
            <div class="flex space-x-2 items-center text-lg">
                <a class="hover:text-zinc-100/90" href="mailto:{email}">
                    <Icon icon="eva:email-fill" />
                </a>
                <a class="hover:text-zinc-100/90 text-xl" href={discord}>
                    <Icon icon="prime:discord" />
                </a>
                <a class="hover:text-zinc-100/90 text-xl" href="https://twitter.com/melike2d">
                    <Icon icon="prime:twitter" />
                </a>
                <a class="hover:text-zinc-100/90 text-xl" href="https://github.com/melike2d">
                    <Icon icon="prime:github" />
                </a>
            </div>
        </footer>
    </div>
</div>
