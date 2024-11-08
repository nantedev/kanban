import { CardContainer } from "./styles"

type CardType = {
    text: string
    id: string
}

export const Card =({text}: CardType) => {
    return <CardContainer>{text}</CardContainer>
}