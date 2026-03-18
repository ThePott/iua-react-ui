import type { SmToLg, None, XsToXl, DivProps, Color } from "@/shared/types"
import { bgColorToCn, paddingToCn } from "@/shared/utils/styles"
import { cva } from "class-variance-authority"
import clsx from "clsx"

const roundBoxVariants = cva("", {
    variants: {
        padding: paddingToCn,
        color: bgColorToCn,
        isBordered: {
            true: "border border-border-dim",
            false: "",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded-my-sm",
            md: "rounded-my-md",
            lg: "rounded-my-lg",
        },
        isShadowed: {
            true: "",
            false: "",
        },
    },
    compoundVariants: [
        {
            radius: "sm",
            isShadowed: true,
            className: "shadow-my-sm",
        },
        {
            radius: "md",
            isShadowed: true,
            className: "shadow-my-md",
        },
        {
            radius: "lg",
            isShadowed: true,
            className: "shadow-my-lg",
        },
    ],
})

interface RoundBoxProps {
    radius?: SmToLg | None
    padding?: XsToXl | None
    color?: Color
    isBordered?: boolean
    isShadowed?: boolean
}

const RoundBox = ({
    radius = "sm",
    padding,
    color = "transparent",
    isBordered,
    isShadowed,
    ...props
}: Omit<DivProps, "color"> & RoundBoxProps) => {
    const { className, children, ...rest } = props
    return (
        <div
            {...rest}
            className={clsx(roundBoxVariants({ radius, padding, color, isBordered, isShadowed }), className)}
        >
            {children}
        </div>
    )
}

export default RoundBox
