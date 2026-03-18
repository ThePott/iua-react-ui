import { type ReactNode } from "react"
import DropdownContent from "../DropdownContent"
import { Vstack } from "@/components/layouts"
import RoundBox from "@/components/layouts/RoundBox"

type DropdownMenuProps = {
    children: ReactNode
}
const DropdownMenu = ({ children }: DropdownMenuProps) => {
    return (
        <DropdownContent>
            <RoundBox radius="md" color="bg3" padding="md" isShadowed className="text-my-sm text-fg-vivid">
                <Vstack gap="none">{children}</Vstack>
            </RoundBox>
        </DropdownContent>
    )
}

export default DropdownMenu
