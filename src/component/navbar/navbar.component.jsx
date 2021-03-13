import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AddItem from '../addItem/addItem.component';
import Items from '../item/item.component';
import './navbar.component.css'

export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    compte = this.props.items
    render() {
        return (
            <div>
                <ul className="nav-bar">
                    <ul className="nav-right">
                        <li><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></li>
                        <li><Link style={{textDecoration:"none",color:"black"}} to="/add">AddItem</Link></li> 
                        <li><Link style={{textDecoration:"none",color:"black"}} to="#">About</Link></li>
                    </ul>
                    <ul className="nav_left">
                    <li className="nom"><Link style={{textDecoration:"none",color:"teal"}} to="/">Ibrahim Bagalwa</Link> 
                    <p>{this.state.count + this.compte.length}</p></li> 
                    </ul>
                    
                </ul>
                <div>
                <h4 className="title">La liste de tout nos achats</h4>
                    <Items items={this.props.items}/>
                    
                </div>
            </div>
        )
    }
}

export default Navbar
