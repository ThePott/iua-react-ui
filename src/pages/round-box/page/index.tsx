import { Container, Hstack, Vstack } from "@/components/layouts"
import RoundBox from "@/components/layouts/RoundBox"
import { Title } from "@/components/texts"

const RoundBoxPage = () => {
    return (
        <Container isPadded>
            <RoundBox color="bg0">
                <Vstack gap="xl">
                    <Title as="h1">RoundBox</Title>
                    <Hstack>
                        <RoundBox padding="lg" color="bg1">
                            bg-1
                        </RoundBox>
                        <RoundBox padding="lg" color="bg2">
                            bg-2
                        </RoundBox>
                    </Hstack>
                </Vstack>
            </RoundBox>
        </Container>
    )
}

export default RoundBoxPage
