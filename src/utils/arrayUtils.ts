type Item = {
    id: string
}

export const findItemIndexById = <TItem extends Item>(items: TItem[], id:string) => {
    return items.findIndex((item:TItem) => item.id === id) 
}

export const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
    //Création de la partie gauce puis droite du tableau en omettant l'élément en index 
    return [...array.slice(0, index), ...array.slice(index + 1)]
}

export const insertItemAtIndex = <TItem>(
       array: TItem[],
       item: TItem,
       index: number
     ) => {
          //Création de la partie gauce puis droite du tableau en inserant l'élément à l'index 
       return [...array.slice(0, index), item, ...array.slice(index)]
     }
  

export const moveItem = <TItem>(
        array: TItem[],
        from: number,
        to: number
        ) => {
        // storing the item in the item constant
        const item = array[from]
        // removing the item from its original position
        return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
        }