import { Outlet } from "@tanstack/react-router"

import { Button } from "@/components/inputs"
import { Hstack, Vstack } from "@/components/layouts"

type Colorscheme = "ghostty" | "tokyo-night" | "ic-orange-ppl" | "gruvbox"

const RootLayout = () => {
    const html = window.document.documentElement
    const changeColorscheme = (colorscheme: Colorscheme) => {
        html.setAttribute("data-schema", colorscheme)
    }
    return (
        <Vstack>
            <Hstack className="p-iua-md border-b border-b-iua-fg-dim">
                <Button onClick={() => changeColorscheme("ghostty")}>ghostty</Button>
                <Button onClick={() => changeColorscheme("tokyo-night")}>tokyo night</Button>
                <Button onClick={() => changeColorscheme("gruvbox")}>gruvbox</Button>
                <Button onClick={() => changeColorscheme("ic-orange-ppl")}>ic orange ppl</Button>
            </Hstack>
            <Outlet />
        </Vstack>
    )
}

export default RootLayout
