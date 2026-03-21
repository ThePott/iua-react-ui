import { LocalAutoComplete } from "@/components/inputs"
import { Container, Hstack, RoundBox, Vstack } from "@/components/layouts"
import { Title } from "@/components/texts"
import type { ValueLabel } from "@/shared/types"

const optionArray: ValueLabel[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "grape", label: "Grape" },
    { value: "kiwi", label: "Kiwi" },
    { value: "lemon", label: "Lemon" },
    { value: "mango", label: "Mango" },
    { value: "orange", label: "Orange" },
    { value: "peach", label: "Peach" },
    { value: "pear", label: "Pear" },
    { value: "pineapple", label: "Pineapple" },
    { value: "strawberry", label: "Strawberry" },
    { value: "watermelon", label: "Watermelon" },
]

const LocalAutoCompletePage = () => {
    return (
        <Container isPadded>
            <RoundBox padding="xl" isShadowed color="bg0" radius="lg">
                <Vstack gap="xl">
                    <Title as="h1">Local Auto Complete</Title>
                    <Hstack>
                        <RoundBox>
                            <Title as="h2">is matching width</Title>
                            <LocalAutoComplete />
                        </RoundBox>
                    </Hstack>
                </Vstack>
            </RoundBox>
        </Container>
    )
}

export default LocalAutoCompletePage
