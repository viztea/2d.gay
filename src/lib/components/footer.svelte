<script lang="ts">
    import { email, discord } from "../../routes/about";

    import Icon from "@iconify/svelte";
    const date = new Date();
</script>

<footer
    class="flex my-4 items-center text-zinc-200/70 justify-between transition ease-in-out text-xs"
>
    <span class="hover:text-zinc-100/90 select-none"
        >melike2d &copy; 2018 - {date.getFullYear()}</span
    >
    <div class="flex space-x-2 items-center text-lg">
        <a
            class="hover:text-zinc-100/90"
            href="mailto:{email}"
            title="Send me an Email"
        >
            <Icon icon="eva:email-fill" />
        </a>
        <a
            class="hover:text-zinc-100/90 text-xl"
            href={discord}
            title="Discord Server"
        >
            <Icon icon="prime:discord" />
        </a>
        <a
            class="hover:text-zinc-100/90 text-xl"
            href="https://twitter.com/melike2d"
            title="Twitter Account"
        >
            <Icon icon="prime:twitter" />
        </a>
        <a
            class="hover:text-zinc-100/90 text-xl"
            href="https://github.com/melike2d"
            title="GitHub Profile"
        >
            <Icon icon="prime:github" />
        </a>
    </div>
</footer>
