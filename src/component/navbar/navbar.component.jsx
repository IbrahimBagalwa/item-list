import React, {useContext} from 'react'
import {ItemContext} from '../context/context.component'

function Navbar() {
    const [item] = useContext(ItemContext)
    return (
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Item List</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                
            </ul>
            <div className="my-2 my-lg-0 mf-4">
                <p className="font-weight-bold">Abrah - {item.length}</p>
            </div>
        </div>
       </nav>
    )
}

export default Navbar
