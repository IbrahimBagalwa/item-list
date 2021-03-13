import React, { Component } from 'react'
import './listItem.component.css'
export class List extends Component {
    render() {
        return (
            <div className="items">
                <p className="titleItem">{this.props.item.course}</p>
                <button className="btn">X</button>
            </div>
        
        )
    }
}

export default List
