type Language = "Kotlin" | "TypeScript" | "Go";

export const email = "real.melike2d@gmail.com"

export const discord = "https://discord.gg/8R4d8RydT4"

export type Project = {
    name: string;
    description: string;
    links: { name: string, url: string, icon: string }[];
    languages: Language[];
}

export const projects: Project[] = [
    {
        name: "lavaclient",
        description: "A simple, easy-to-use, and flexible lavalink client for node.js",
        links: [
            { name: "Website", url: "https://lavaclient.js.org",                icon: "ph:link-bold" },
            { name: "NPM",     url: "https://npmjs.com/package/lavaclient",     icon: "eva:npm-fill" },
            { name: "GitHub",  url: "https://github.com/lavaclient/lavaclient", icon: "eva:github-fill" },
        ],
        languages: ["TypeScript"]
    },
    {
        name: "kantoku",
        description: "📡 discord http interactions server written in golang",
        links: [
            { name: "GitHub",  url: "https://github.com/dimensional-fun/kantoku", icon: "eva:github-fill" },
        ],
        languages: ["Go"]
    },
    {
        name: "usagi",
        description: "🐰 kotlin multi-platform rabbitmq/amqp client",
        links: [
            { name: "Website", url: "https://dimensional-fun.github.io/usagi",  icon: "ph:link-bold" },
            { name: "GitHub",  url: "https://github.com/dimensional-fun/usagi", icon: "eva:github-fill" },
        ],
        languages: ["Kotlin"]
    },
    {
        name: "kedis",
        description: "🗃️ kotlin multi-platform redis client",
        links: [
            { name: "Website", url: "https://dimensional-fun.github.io/kedis",  icon: "ph:link-bold" },
            { name: "GitHub",  url: "https://github.com/dimensional-fun/kedis", icon: "eva:github-fill" },
        ],
        languages: ["Kotlin"]
    },
]

export const languages: Record<string, { icon: string, color: string }> = {
    "Kotlin":     { icon: "simple-icons:kotlin", color: "#A97BFF" },
    "TypeScript": { icon: "simple-icons:typescript", color: "#3178C6" },
    "Go":         { icon: "simple-icons:go", color: "#00ADD8" }
}
