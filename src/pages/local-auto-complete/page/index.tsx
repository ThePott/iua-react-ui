import { LocalAutoComplete } from "@/package/components/inputs"
import { RoundBox, Vstack, Hstack, Container } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import type { ValueLabel } from "@/package/shared/types"

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
                    <Vstack>
                        <RoundBox>
                            <Title as="h2">is matching width</Title>
                            <LocalAutoComplete
                                isRed={false}
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                isWidthMatching
                                placeholder="is width matching"
                            />
                            <LocalAutoComplete
                                isRed={false}
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                placeholder="not is width matching"
                            />
                        </RoundBox>
                        <RoundBox>
                            <Title as="h2">is red</Title>
                            <LocalAutoComplete
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                isRed
                                placeholder="is red"
                            />
                            <LocalAutoComplete
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                isRed={false}
                                placeholder="not is red"
                            />
                        </RoundBox>
                        <RoundBox>
                            <Title as="h2">disabled</Title>
                            <LocalAutoComplete
                                isRed={false}
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                disabled
                                placeholder="disabled"
                            />
                            <LocalAutoComplete
                                isRed={false}
                                onChange={() => {}}
                                optionArray={optionArray}
                                defaultValue="apple"
                                placeholder="not disabled"
                            />
                        </RoundBox>
                    </Vstack>
                </Vstack>
            </RoundBox>
        </Container>
    )
}

export default LocalAutoCompletePage
