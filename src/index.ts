import { serve } from "bun"
import index from "./index.html"

const server = serve({
    port: process.env.PORT || 3300,
    routes: {
        "/*": index, // Serve index.html for all unmatched routes.
    },

    development: process.env.NODE_ENV !== "production" && {
        hmr: true, // Enable browser hot reloading in development
        console: true, // Echo console logs from the browser to the server
    },
})

console.log(`🚀 Server running at ${server.url}`)
