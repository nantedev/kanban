import { DragItem } from "../DragItem"


//Action union Type
export type ActionType =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }
  | {
      type: "MOVE_LIST"
      payload: {
      draggedId: string
      hoverId: string
    }
  }
  | {
       type: "SET_DRAGGED_ITEM"
       payload: DragItem | null
  }
  | {
        type: "MOVE_TASK"
        payload: {
          draggedItemId: string
          hoveredItemId: string | null
          sourceColumnId: string
          targetColumnId: string
     }
   }

  //Action Creator 

export const addList = (text: string): ActionType => ({
      type: "ADD_LIST",
      payload: text
    })
    
export const addTask = (text: string, listId: string): ActionType => ({
      type:"ADD_TASK",
      payload: {
        text,
        listId
      }
    })

export const moveList = (
        draggedId: string,
        hoverId: string
      ): ActionType => ({
        type: "MOVE_LIST",
        payload: {
          draggedId,
          hoverId
        }
        })

export const setDraggedItem = (
        draggedItem: DragItem | null
      ): ActionType => ({
        type: "SET_DRAGGED_ITEM",
        payload: draggedItem
      })

export const moveTask = (
       draggedItemId: string,
       hoveredItemId: string | null,
       sourceColumnId: string,
       targetColumnId: string
     ): ActionType => ({
       type: "MOVE_TASK",
       payload: {
         draggedItemId,
           hoveredItemId,
           sourceColumnId,
           targetColumnId
         }
       })