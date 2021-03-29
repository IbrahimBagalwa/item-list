import React, {useContext, useEffect} from 'react'
import {ItemContext} from '../context/context.component'
function ItemList() {
  const [item,setItem] = useContext(ItemContext)
 function totalGen(){
   return item.reduce((amount,article)=>(article.prix * article.quantity + amount),0)
  
 }
    return (
      <div class="card mr-3" style={{marginTop:'10px'}}>
        <div class="card border-primary mb-3">{
          item.map((ite)=>[
                    <div key={ite.id}>
                         <h5 class="card-title">{ite.name}</h5>
                         <p class="card-text">Prix-Unitaire: {ite.prix} * Quantity: {ite.quantity} = {ite.prix * ite.quantity} </p>
                         <button className="btn btn-outline-danger">Delete</button>
                    </div>
                ])
        }
         </div>
         <div>
          <p class="card-text">Total General: {totalGen()}</p>
         </div>    
    </div>            
    )
}

export default ItemList
