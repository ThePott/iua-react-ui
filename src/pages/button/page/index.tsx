import { Button } from "@/package/components/inputs"
import { Hstack, Vstack } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import PageContainer from "@/shared/components/PageContainer"

const ButtonPage = () => {
    return (
        <PageContainer>
            <Title as="h1">Button</Title>
            <Vstack>
                <Title as="h2">bg</Title>
                <Hstack>
                    <Button color="bg0">bg-0</Button>
                    <Button color="bg1">bg-1</Button>
                    <Button color="bg2">bg-2</Button>
                </Hstack>
            </Vstack>
        </PageContainer>
    )
}

export default ButtonPage
