import { tv } from "tailwind-variants/lite" // NOTE: using `lite` to NOT use twMerge
import type { Color, None, XsToXl } from "../types"

// NOTE: only using tailwind-variants for auto complete by using tailwindcss intelisence
// NOTE: it is no better tahn plan Record if no tailwindcss autocomplete

export const gapVariants = tv({
    variants: {
        ...({
            none: "",
            xs: "gap-iua-xs",
            sm: "gap-iua-sm",
            md: "gap-iua-md",
            lg: "gap-iua-lg",
            xl: "gap-iua-xl",
        } satisfies Record<None | XsToXl, string>),
    },
})

export const paddingVariants = tv({
    variants: {
        ...({
            none: "",
            xs: "p-iua-xs",
            sm: "p-iua-sm",
            md: "p-iua-md",
            lg: "p-iua-lg",
            xl: "p-iua-xl",
        } satisfies Record<None | XsToXl, string>),
    },
})

export const bgVariants = tv({
    variants: {
        ...({
            bgNeg1: "bg-iua-bg-neg-1",
            bg0: "bg-iua-bg-0",
            bg1: "bg-iua-bg-1",
            bg2: "bg-iua-bg-2",
            red: "bg-iua-red-0",
            yellow: "bg-iua-yellow-0",
            blue: "bg-iua-blue-0",
            green: "bg-iua-green-0",
            transparent: "",
        } satisfies Record<Color, string>),
    },
})

export const fgFromBgVariants = tv({
    variants: {
        ...({
            bgNeg1: "",
            bg0: "",
            bg1: "",
            bg2: "",
            red: "",
            yellow: "text-iua-inverted-vivid",
            blue: "text-iua-inverted-vivid",
            green: "text-iua-inverted-vivid",
            transparent: "",
        } satisfies Record<Color, string>),
    },
})

export const wideWidthVariants = tv({
    variants: {
        ...({
            xs: "max-w-50 w-full",
            sm: "max-w-100 w-full",
            md: "max-w-150 w-full",
            lg: "max-w-200 w-full",
            xl: "max-w-250 w-full",
        } satisfies Record<XsToXl, string>),
    },
})

export const narrowWidthVariants = tv({
    variants: {
        ...({
            xs: "w-25",
            sm: "w-50",
            md: "w-75",
            lg: "w-100",
            xl: "w-125",
        } satisfies Record<XsToXl, string>),
    },
})
