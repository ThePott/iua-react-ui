import { Container, Hstack, Vstack } from "@/components/layouts"
import RoundBox from "@/components/layouts/RoundBox"
import { Title } from "@/components/texts"

const RoundBoxPage = () => {
    return (
        <Container isPadded>
            <RoundBox padding="xl" className="bg-amber-400">
                <Vstack gap="xl">
                    <Title as="h1" className="bg-amber-400">
                        RoundBox
                    </Title>
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
