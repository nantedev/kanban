import { useState } from "react"
import { AddItemButton } from "./styles"

type AddNewItemType = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemType) => {
   const [showForm, setShowForm] = useState(false)
   const {onAdd, toggleButtonText, dark} = props
    
   if (showForm) {}   

    return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
        {toggleButtonText}
    </AddItemButton> 
    )
}