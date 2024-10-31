import { Card } from './Card';
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnType = {
    text: string;
}

export default function Column({text}: ColumnType) {
  return (
     <ColumnContainer>
       <ColumnTitle>{text}</ColumnTitle>
       <Card text="Generate app scaffold" />
       <Card text="Learn TypeScript" />
       <Card text="Begin to use static typing" />
     </ColumnContainer>
   )
}
