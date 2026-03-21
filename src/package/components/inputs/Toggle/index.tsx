import clsx from "clsx"
import { motion } from "motion/react"
import { useState, type ReactNode } from "react"
import { motionTransition } from "@/package/shared/utils/framerMotionAnimations"
import { Hstack } from "../../layouts"

type ToggleProps = {
    defaultIsOn?: boolean
    onChange: (isOn: boolean) => void
    children?: ReactNode
    isBordered?: boolean
}
const ToggleWrapper = ({ defaultIsOn, onChange, children, isBordered }: ToggleProps) => {
    const [isOn, setIsOn] = useState(defaultIsOn)

    const handleClick = () => {
        onChange(!isOn)
        setIsOn(!isOn)
    }

    return (
        <Hstack
            gap="md"
            className={clsx(
                "items-center rounded-full cursor-pointer select-none",
                isBordered && "px-4 py-2 border border-border-dim",
            )}
            onClick={handleClick}
        >
            {children}
            <div>
                <div className={clsx("rounded-full relative p-iua-xs bg-fg-muted w-8.5 h-3.5")}>
                    <motion.div
                        layoutId="toggle"
                        transition={motionTransition}
                        className={clsx(
                            "size-5 rounded-full absolute top-1/2 -translate-y-1/2",
                            isOn ? "right-0 bg-washed-green" : "left-0 bg-fg-vivid",
                        )}
                    />
                </div>
            </div>
        </Hstack>
    )
}

const Toggle = (props: ToggleProps) => {
    const { defaultIsOn } = props
    return <ToggleWrapper key={String(defaultIsOn)} {...props} />
}

export default Toggle
