import { CardContainer, ColumnContainer, ColumnTitle } from './styles'
type ColumnType = {
    text: string;
}
export default function Column({text}: ColumnType) {
  return (
       <ColumnContainer>
       <ColumnTitle>{text}</ColumnTitle>
       <CardContainer>Generate app scaffold</CardContainer>
       <CardContainer>Learn TypeScript</CardContainer>
       <CardContainer>Begin to use static typing</CardContainer>
      </ColumnContainer>
  )
}
