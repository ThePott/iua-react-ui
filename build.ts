#!/usr/bin/env bun
import plugin from "bun-plugin-tailwind"

const start = performance.now()

await Bun.build({
    entrypoints: ["./src/index.html"],
    outdir: "dist",
    sourcemap: "linked",
    target: "browser",
    minify: true,
    define: {
        "process.env.NODE_ENV": "production",
    },
    env: "BUN_PUBLIC_*",
    plugins: [plugin],
})

const end = performance.now()
const buildTime = (end - start).toFixed(2)
console.log(`\n✅ Build completed in ${buildTime}ms\n`)
