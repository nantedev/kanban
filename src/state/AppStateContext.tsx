import { createContext, ReactNode, useContext, Dispatch} from "react";
import { AppStateType, ListType, TaskType, appStateReducer } from "./AppStateReducer";
import { ActionType } from "./action";
import { useImmerReducer } from "use-immer";

type AppStateContextType = {
    lists: ListType[]
    getTasksByListId(id: string): TaskType[]
    dispatch: Dispatch<ActionType>
  }

type AppStateProviderType = {
     children: ReactNode
 }

    //Data
const appData: AppStateType = {
   lists: [
     {
       id: "0",
       text: "To Do",
       tasks: [{ id: "c0", text: "Generate app scaffold" }]
     },
     {
        id: "1",
        text: "In Progress",
        tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
        id: "2",
        text: "Done",
        tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
      ]
    }




    //Operator to make TypeScript think that our empty object actually has AppStateContextType type
    const AppStateContext = createContext<AppStateContextType>(
       {} as AppStateContextType
    )


     //Defining the Context Provider
  export const AppStateProvider = ({ children }: AppStateProviderType) => {
          
          const [state, dispatch] = useImmerReducer(appStateReducer, appData)
          const {lists} = state
      
          const getTasksByListId = (id: string) => {
             return lists.find((list) => list.id === id)?.tasks || []
           }
       
           return (
             <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
               {children}
             </AppStateContext.Provider>
           )
         }

    //useContext (custom) hook
  export const useAppState = () => {
        return useContext(AppStateContext)
    }