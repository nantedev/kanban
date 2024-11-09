import { nanoid } from "nanoid"
import { findItemIndexById } from "../utils/arrayUtils"
import { ActionType } from "./action"


export type TaskType = {
    id: string
    text: string
} 

export type ListType = {
    id: string
    text: string
    tasks: TaskType[]
}

export type AppStateType = {
    lists: ListType[]
}

export const appStateReducer = (draft: AppStateType, action: ActionType): AppStateType | void => {
    switch (action.type) { 
        case "ADD_LIST": {
            draft.lists.push({
            id: nanoid(),
            text: action.payload,
            tasks: []
      })
            break
    }
        case "ADD_TASK": {
            const { text, listId } = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)
            draft.lists[targetListIndex].tasks.push({
                id:nanoid(),
                text
            })
            break
        }
    }
}
