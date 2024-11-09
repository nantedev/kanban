export type ActionType =
  | {
      type: "ADD_LIST"
      payload: string
    }
  | {
      type: "ADD_TASK"
      payload: { text: string; listId: string }
    }

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



    