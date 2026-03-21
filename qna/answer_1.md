# Answer: Runtime Theme Change Feature

## The Problem

Your CSS uses `:root[data-schema="..."]` selectors. Since `:root` targets the `<html>` element, your
`<ColorSchemeProvider />` wrapping a React component won't work because React's root element (typically a `<div>`) is
not `:root`.

## Solution: Manipulate the `<html>` element directly

Since your CSS targets `:root[data-schema]`, you should set the `data-schema` attribute on the actual `<html>` element.
React can do this via `document.documentElement`:

```tsx
// ColorSchemeContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ColorScheme = "ghostty" | "ic-orange-ppl" | "rose-pine" | "tokyo-night" | "gruvbox"

interface ColorSchemeContextValue {
    scheme: ColorScheme
    setScheme: (scheme: ColorScheme) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null)

export function ColorSchemeProvider({
    children,
    defaultScheme = "ghostty",
}: {
    children: ReactNode
    defaultScheme?: ColorScheme
}) {
    const [scheme, setScheme] = useState<ColorScheme>(() => {
        // Optional: read from localStorage for persistence
        if (typeof window !== "undefined") {
            return (localStorage.getItem("color-scheme") as ColorScheme) || defaultScheme
        }
        return defaultScheme
    })

    useEffect(() => {
        // Set attribute on <html> element directly
        document.documentElement.setAttribute("data-schema", scheme)
        localStorage.setItem("color-scheme", scheme)
    }, [scheme])

    return <ColorSchemeContext.Provider value={{ scheme, setScheme }}>{children}</ColorSchemeContext.Provider>
}

export function useColorScheme() {
    const context = useContext(ColorSchemeContext)
    if (!context) {
        throw new Error("useColorScheme must be used within ColorSchemeProvider")
    }
    return context
}
```

## Usage

```tsx
// App.tsx or main layout
import { ColorSchemeProvider } from "./ColorSchemeContext"

export function App() {
    return (
        <ColorSchemeProvider defaultScheme="ghostty">
            <YourApp />
        </ColorSchemeProvider>
    )
}

// Any component that needs to change theme
import { useColorScheme } from "./ColorSchemeContext"

function ThemeSwitcher() {
    const { scheme, setScheme } = useColorScheme()

    return (
        <select value={scheme} onChange={(e) => setScheme(e.target.value as ColorScheme)}>
            <option value="ghostty">Ghostty</option>
            <option value="ic-orange-ppl">IC Orange PPL</option>
            <option value="rose-pine">Rose Pine</option>
            <option value="tokyo-night">Tokyo Night</option>
            <option value="gruvbox">Gruvbox</option>
        </select>
    )
}
```

## Key Insight

The `<ColorSchemeProvider />` wrapper is for **React state management** (providing context to child components). The
actual CSS application happens by manipulating `document.documentElement` (the `<html>` element) via `useEffect`. These
are two separate concerns:

1. **React Context** - shares scheme state across components
2. **DOM manipulation** - applies the `data-schema` attribute to `:root`

This pattern is common in theming libraries (like next-themes, radix-ui/themes, etc.) because CSS custom properties on
`:root` cannot be changed through React's virtual DOM - you must touch the real `<html>` element.
