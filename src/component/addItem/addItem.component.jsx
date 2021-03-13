
import './addItem.component.css'
import React, { Component } from 'react'

export class AddItem extends Component {
    state = {
        course:''
    }
    addItem = (course)=>{
        const new_items = {
      id: this.props.state.items.length +1,
      course:course
    }
    this.setState({items:[...this.props.state.items, new_items]})
    }
    onSubmit = (e)=>{
        e.preventDefault()
        this.addItem(this.state.course)
    }
    onChange = (e)=>{this.setState({[e.target.name]:e.target.value})}
    render() {
        return (
            <div className="container">
                <form className="input-text" onSubmit={this.onSubmit}>
                    <input className="input" name="course" type="text" placeholder="ajouter vos courses ici" onChange={this.onChange} value={this.state.value}/>
                    <input className="btn-add" type="submit" value="ajouter Item"/>
                </form>
            </div>
        )
    }
}

export default AddItem
