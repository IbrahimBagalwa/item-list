import React, {useState,createContext} from 'react'

export const ItemContext = createContext();
export function ItemProvider(props) {
    
    let items = [
        {
            id:1,
            name:"pome",
            prix:10,
            quantity:8
        },
        {
            id:2,
            name:"avocat",
            prix:3,
            quantity:10
        },
        {
            id:3,
            name:"pain",
            prix:2,
            quantity:4
        }
    ]
    const [item,setItem] = useState(items);
    return (
      <ItemContext.Provider value={[item,setItem]}>
          {props.children}
      </ItemContext.Provider>
    )
}


