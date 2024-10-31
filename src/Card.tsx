import { CardContainer } from "./styles"

type CardType = {
    text: string;
}

export const Card =({text}: CardType) => {
    return <CardContainer>{text}</CardContainer>
}