
import './item.component.css'
import React, { Component } from 'react'
import List from '../listItem/listItem.component'

export class Items extends Component {

    render() {
        return this.props.items.map((item)=>(
              <List key={item.id} item={item}/>
        ) 
    )
    }
}

export default Items
