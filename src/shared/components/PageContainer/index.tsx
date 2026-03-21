import type { ReactNode } from "react"
import { Container, RoundBox, Vstack } from "@/package/components/layouts"

type PageContainerProps = {
    children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <Container width="xl" isPadded>
            <RoundBox padding="xl" color="bg0" radius="lg" isShadowed>
                <Vstack gap="lg">{children}</Vstack>
            </RoundBox>
        </Container>
    )
}

export default PageContainer
