type Language = "Kotlin" | "TypeScript" | "Go" | "Rust";

export const email = "hi@vzt.gay"

export const discord = "https://discord.gg/8R4d8RydT4"

export type Project = {
    name: string;
    description: string;
    links: { name: string, url: string, icon: string }[];
    languages: Language[];
}

export const projects: Project[] = [
    {
        name: "eara",
        description: "💿 discord music bot",
        links: [
            { name: "Website", url: "https://eara.io",  icon: "ri:external-link-fill" },
            { name: "GitHub", url: "https://github.com/eara-bot", icon: "ri:github-fill" }
        ],
        languages: ["Rust", "Kotlin", "TypeScript"]
    },
    {
        name: "aria",
        description: "🎹 audio player library for kotlin",
        links: [
            { name: "GitHub", url: "https://github.com/aria-lib/aria", icon: "ri:github-fill" }
        ],
        languages: ["Kotlin"]
    },
    {
        name: "lavaclient",
        description: "A simple, easy-to-use, and flexible lavalink client for node.js",
        links: [
            { name: "Website", url: "https://lavaclient.js.org",                icon: "ri:external-link-fill" },
            { name: "NPM",     url: "https://npmjs.com/package/lavaclient",     icon: "ri:npmjs-fill" },
            { name: "GitHub",  url: "https://github.com/lavaclient/lavaclient", icon: "ri:github-fill" },
        ],
        languages: ["TypeScript"]
    },
    // {
    //     name: "kantoku",
    //     description: "📡 discord http interactions server written in golang",
    //     links: [
    //         { name: "GitHub",  url: "https://github.com/dimensional-fun/kantoku", icon: "ri:github-fill" },
    //     ],
    //     languages: ["Go"]
    // },
    // {
    //     name: "usagi",
    //     description: "🐰 kotlin multi-platform rabbitmq/amqp client",
    //     links: [
    //         { name: "Website", url: "https://dimensional-fun.github.io/usagi",  icon: "ri:external-link-fill" },
    //         { name: "GitHub",  url: "https://github.com/dimensional-fun/usagi", icon: "ri:github-fill" },
    //     ],
    //     languages: ["Kotlin"]
    // },
    // {
    //     name: "kedis",
    //     description: "🗃️ kotlin multi-platform redis client",
    //     links: [
    //         // { name: "Website", url: "https://dimensional-fun.github.io/kedis",  icon: "ri:external-link-fill" },
    //         { name: "GitHub",  url: "https://github.com/dimensional-fun/kedis", icon: "ri:github-fill" },
    //     ],
    //     languages: ["Kotlin"]
    // },
    // {
    //     name: "nats.kt",
    //     description: "🛰️ kotlin multi-platform NATS client",
    //     links: [
    //         { name: "GitHub", url: "https://github.com/dimensional-fun/nats.kt", icon: "ri:github-fill" },
    //     ],
    //     languages: ["Kotlin"]
    // }
]

export const languages: Record<string, { icon: string, color: string }> = {
    "Kotlin":     { icon: "simple-icons:kotlin", color: "#A97BFF" },
    "TypeScript": { icon: "simple-icons:typescript", color: "#3178C6" },
    "Go":         { icon: "simple-icons:go", color: "#00ADD8" },
    "Rust":       { icon: "simple-icons:rust", color: "#000000" }
}
