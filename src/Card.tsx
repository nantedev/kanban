import { useRef } from "react"
import { useItemDrag } from "./hook/useItemDrag"
import { CardContainer } from "./styles"
import { useDrop } from "react-dnd"
import { useAppState } from "./state/AppStateContext"
import { isHidden } from "./utils/isHidden"
import { moveTask, setDraggedItem } from "./state/action"
import { throttle } from "throttle-debounce-ts"

type CardProps = {
    text: string
    id: string
    columnId: string
    isPreview?: boolean
}

export const Card =({
    text,
    id,
    columnId,
    isPreview
}: CardProps) => {
   const {draggedItem, dispatch} = useAppState()
   const ref = useRef<HTMLDivElement>(null)
   const { drag } = useItemDrag({
      type: "CARD",
      id,
      text,
      columnId
    })
    const [, drop] = useDrop({
         accept: "CARD",
         hover: throttle(200, () => {
           if (!draggedItem) {
             return
               }
               if (draggedItem.type !== "CARD") {
                 return
               }
               if (draggedItem.id === id) {
                 return
               }
         
               dispatch(
                 moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
               )
               dispatch(setDraggedItem({ ...draggedItem, columnId }))
             })
           })
           drag(drop(ref))
           
    return <CardContainer
            isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
            isPreview={isPreview}
            ref={ref}
            >
            {text}
            </CardContainer>
}