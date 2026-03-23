import { createFileRoute } from "@tanstack/react-router"
import LocalAutoCompletePage from "@/pages/local-auto-complete/page"

export const Route = createFileRoute("/local-auto-complete/")({
    component: LocalAutoCompletePage,
})
