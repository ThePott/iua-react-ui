import { Button } from "@/package/components/inputs"
import { Hstack, Vstack } from "@/package/components/layouts"
import { Title } from "@/package/components/texts"
import PageContainer from "@/shared/components/PageContainer"

const ButtonPage = () => {
    return (
        <PageContainer>
            <Title as="h1">Button</Title>
            <Vstack>
                <Title as="h2">color</Title>
                <Hstack>
                    <Button color="bg0">bg-0</Button>
                    <Button color="bg1">bg-1</Button>
                    <Button color="bg2">bg-2</Button>
                    <Button color="red">red</Button>
                    <Button color="yellow">yellow</Button>
                    <Button color="green">green</Button>
                    <Button color="blue">blue</Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">status: pending</Title>
                <Hstack>
                    <Button status="pending" color="bg0">
                        bg-0
                    </Button>
                    <Button status="pending" color="bg1">
                        bg-1
                    </Button>
                    <Button status="pending" color="bg2">
                        bg-2
                    </Button>
                    <Button status="pending" color="red">
                        red
                    </Button>
                    <Button status="pending" color="yellow">
                        yellow
                    </Button>
                    <Button status="pending" color="green">
                        green
                    </Button>
                    <Button status="pending" color="blue">
                        blue
                    </Button>
                </Hstack>
            </Vstack>
            <Vstack>
                <Title as="h2">color</Title>
                <Hstack>
                    <Button color="bg0">bg-0</Button>
                    <Button color="bg1">bg-1</Button>
                    <Button color="bg2">bg-2</Button>
                    <Button color="red">red</Button>
                    <Button color="yellow">yellow</Button>
                    <Button color="green">green</Button>
                    <Button color="blue">blue</Button>
                </Hstack>
            </Vstack>
        </PageContainer>
    )
}

export default ButtonPage
