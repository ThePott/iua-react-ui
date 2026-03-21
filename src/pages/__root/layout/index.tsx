import { Outlet } from "@tanstack/react-router"
import { Button } from "@/package/components/inputs"
import { Vstack, Hstack } from "@/package/components/layouts"

type Colorscheme = "ghostty" | "tokyo-night" | "ic-orange-ppl" | "gruvbox"

const RootLayout = () => {
    const html = window.document.documentElement
    const changeColorscheme = (colorscheme: Colorscheme) => {
        html.setAttribute("data-schema", colorscheme)
    }
    return (
        <Vstack>
            <Hstack className="p-iua-md border-b border-b-iua-fg-dim">
                <Button border="always" onClick={() => changeColorscheme("ghostty")}>
                    ghostty
                </Button>
                <Button border="always" onClick={() => changeColorscheme("tokyo-night")}>
                    tokyo night
                </Button>
                <Button border="always" onClick={() => changeColorscheme("gruvbox")}>
                    gruvbox
                </Button>
                <Button border="always" onClick={() => changeColorscheme("ic-orange-ppl")}>
                    ic orange ppl
                </Button>
            </Hstack>
            <Outlet />
        </Vstack>
    )
}

export default RootLayout
