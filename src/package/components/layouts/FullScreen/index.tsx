import clsx from "clsx"
import type { DivProps } from "@/package/shared/types"

const FullScreen = (props: DivProps) => {
    const { className, children, ...rest } = props
    return (
        <div {...rest} className={clsx("flex h-screen w-screen flex-col overflow-hidden", className)}>
            {children}
        </div>
    )
}

export default FullScreen
