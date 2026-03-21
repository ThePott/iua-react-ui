import { Container, Hstack, Vstack } from "@/components/layouts"
import RoundBox from "@/components/layouts/RoundBox"
import { Title } from "@/components/texts"

const RoundBoxPage = () => {
    return (
        <Container isPadded>
            <RoundBox padding="xl" isShadowed color="bg0" radius="lg">
                <Vstack gap="xl">
                    <Title as="h1">RoundBox</Title>
                    <Vstack>
                        <Title as="h1" isMuted>
                            bg
                        </Title>
                        <Hstack className="flex-wrap">
                            <RoundBox padding="lg" color="bgNeg1">
                                bg-neg-1
                            </RoundBox>
                            <RoundBox padding="lg" color="bg0">
                                bg-0
                            </RoundBox>
                            <RoundBox padding="lg" color="bg1">
                                bg-1
                            </RoundBox>
                            <RoundBox padding="lg" color="bg2">
                                bg-2
                            </RoundBox>
                        </Hstack>
                    </Vstack>
                    <Vstack>
                        <Title as="h1" isMuted>
                            colors
                        </Title>
                        <Hstack>
                            <RoundBox padding="lg" color="red" className="text-iua-fg-inverted-vivid">
                                red
                            </RoundBox>
                            <RoundBox padding="lg" color="yellow" className="text-iua-fg-inverted-vivid">
                                yellow
                            </RoundBox>
                            <RoundBox padding="lg" color="blue" className="text-iua-fg-inverted-vivid">
                                blue
                            </RoundBox>
                            <RoundBox padding="lg" color="green" className="text-iua-fg-inverted-vivid">
                                green
                            </RoundBox>
                        </Hstack>
                    </Vstack>
                    <Vstack>
                        <Title as="h1" isMuted>
                            borders
                        </Title>
                        <Hstack>
                            <RoundBox padding="lg" color="bg2" isBordered>
                                bordered
                            </RoundBox>
                            <RoundBox padding="lg" color="bg2">
                                not bordered
                            </RoundBox>
                        </Hstack>
                    </Vstack>
                    <Vstack>
                        <Title as="h1" isMuted>
                            shadowed
                        </Title>
                        <Hstack>
                            <RoundBox padding="lg" color="bg2" isShadowed radius="sm">
                                shadowed with radius sm
                            </RoundBox>
                            <RoundBox padding="lg" color="bg2" isShadowed radius="md">
                                shadowed with radius md
                            </RoundBox>
                            <RoundBox padding="lg" color="bg2" isShadowed radius="lg">
                                shadowed with radius lg
                            </RoundBox>
                        </Hstack>
                    </Vstack>
                </Vstack>
            </RoundBox>
        </Container>
    )
}

export default RoundBoxPage
