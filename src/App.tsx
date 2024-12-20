import { AddNewItem } from "./AddNewItem"
import Column from "./Column"
import {AppContainer} from "./styles"
import { useAppState } from "./state/AppStateContext"
import { addList } from "./state/action"
import { CustomDragLayer } from "./CustomDragLayer"



function App() {
  const {lists, dispatch} = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer/>
        {lists.map((list) => (
          <Column text={list.text} key={list.id} id={list.id}/>
        ))}
        
        <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))}/>  
    </AppContainer>
  )
}

export default App
