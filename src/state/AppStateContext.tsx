import { createContext, ReactNode, useContext} from "react";


type Task = {
    id: string,
    text: string,
} 

type List = {
    id: string,
    text: string,
    tasks: Task[],
}

export type AppState = {
    lists: List[],
}

type AppStateContextType = {
    lists: List[]
    getTasksByListId(id: string): Task[]
  }

type AppStateProviderType = {
     children: ReactNode
 }

    //Data
const appData: AppState = {
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
           const { lists } = appData
        
           const getTasksByListId = (id: string) => {
             return lists.find((list) => list.id === id)?.tasks || []
           }
       
           return (
             <AppStateContext.Provider value={{ lists, getTasksByListId }}>
               {children}
             </AppStateContext.Provider>
           )
         }

    //useContext (custom) hook
export const useAppState = () => {
        return useContext(AppStateContext)
    }