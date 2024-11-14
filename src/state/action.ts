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

    