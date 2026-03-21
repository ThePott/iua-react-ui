import clsx from "clsx"
import type { ComponentPropsWithRef, ElementType } from "react"
import { tv } from "tailwind-variants/lite"
import { bgVariants } from "@/package/shared/utils/styles"
import { Hstack } from "../../layouts"
import { Loader } from "../../pending/"

const buttonColorArray = ["green", "bg0", "bg1", "bg2", "red", "transparent"] as const
type ButtonColor = (typeof buttonColorArray)[number]

const buttonVariants = tv({
    base: "rounded-iua-sm my-transition",
    variants: {
        color: bgVariants,
        status: {
            enabled: "cursor-pointer",
            disabled: "",
            pending: "",
        },
        padding: {
            normal: "py-iua-sm px-iua-md",
            wide: "py-iua-xs px-iua-md w-full",
            tight: "p-iua-xs",
            none: "",
        },
        isShadowed: {
            false: "",
            true: "shadow-iua-sm",
        },
        border: {
            always: "",
            onHover: "",
            none: "",
        },
    },
    compoundVariants: [
        // NOTE: text colors
        { color: ["transparent"], className: "disabled:text-fg-muted" },
        { color: ["bg0", "bg1", "bg2"], className: "text-fg-vivid disabled:text-fg-muted" },
        {
            color: ["green", "red"],
            className: "text-fg-inverted-vivid disabled:text-fg-inverted-muted",
        },

        // NOTE: background colors
        { color: "bg0", status: "enabled", className: "hover:bg-iua-bg-1 active:bg-iua-bg-2" },
        { color: "bg1", status: "enabled", className: "hover:bg-iua-bg-2 active:bg-iua-bg-3" },
        { color: "bg2", status: "enabled", className: "hover:bg-iua-bg-3 active:bg-iua-bg-4" },

        {
            color: "green",
            status: "enabled",
            className: "hover:bg-iua-green-1 active:bg-iua-green-2",
        },
        { color: "green", status: "disabled", className: "bg-iua-green-neg-1" },
        { color: "green", status: "pending", className: "bg-iua-green-neg-1" },

        {
            color: "red",
            status: "enabled",
            className: "bg-iua-red hover:bg-iua-red-1 active:bg-iua-red-2",
        },
        { color: "red", status: "disabled", className: "bg-iua-red-neg-1" },
        { color: "red", status: "pending", className: "bg-iua-red-neg-1" },

        {
            border: "onHover",
            status: "enabled",
            className: "border border-transparent hover:border-border-muted",
        },
        {
            border: "always",
            status: "enabled",
            className: "border border-border-dim hover:border-border-muted",
        },
    ],
})

interface WithButtonProps<T extends ElementType = "button"> {
    as?: T
    color?: ButtonColor
    status?: "enabled" | "disabled" | "pending"
    border?: "onHover" | "always" | "none"
    padding?: "wide" | "tight" | "normal" | "none"
    isShadowed?: boolean
    isOnLeft?: boolean
}
type ButtonProps<T extends ElementType> = WithButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof WithButtonProps<T>>

const lightBgArray: ButtonColor[] = ["green", "red"]

const Button = <T extends ElementType>({
    as,
    color = "transparent",
    status = "enabled",
    border = "none",
    padding = "normal",
    isShadowed = false,
    isOnLeft = false,
    ...props
}: ButtonProps<T>) => {
    const { className, children, ...rest } = props

    const isLoaderDark = lightBgArray.includes(color)

    const Component: ElementType = as ?? "button"
    return (
        <Component
            {...rest}
            disabled={status !== "enabled"}
            className={clsx(buttonVariants({ color, status, padding, border, isShadowed }), className)}
        >
            <Hstack className={clsx("items-center", isOnLeft ? "text-left" : "justify-center")}>
                {status === "pending" && <Loader isDark={isLoaderDark} />}
                {children}
            </Hstack>
        </Component>
    )
}

export default Button
