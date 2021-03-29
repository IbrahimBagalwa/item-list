import React,{useContext} from 'react'
import { ItemContext } from '../context/context.component'

function AddItem() {
    const [item,setItem] = useContext(ItemContext)
    const addItem = e =>{
        e.preventDefault()
        const new_item = {
            id: item.length + 1,
            name:e.target.name.value, 
            prix:parseFloat(e.target.prix.value),
            quantity:parseInt(e.target.quantity.value) 

        }
        setItem (preItem=>[...item,new_item]);
        e.target.reset()
    }

    return (
        <div>
            <h5 className="text-center">Add Item</h5>
            <form onSubmit={addItem}>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="nom d'article..." id=""/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" name="prix" placeholder="prix d'article..." id=""/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" name="quantity" placeholder="quantity d'article..." id=""/>
                </div>
                <div className="button-control">
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem
