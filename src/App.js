
import './App.css';
import Navbar from './component/navbar/navbar.component';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddItem from './component/addItem/addItem.component';
import React, { Component } from 'react'

export class App extends Component {
  constructor(propos){
    super(propos)
    this.state = {
      items: [
        {
          id:1,
          course : "achat de la nourriture"
        },
        {
          id:2,
          course: "achat de la machine"
        }
      ]
    }
  }
  render() {
    
    return (
      <div className="App">
        <Router>
          <Navbar items={this.state.items} />
            <Route exact path="/add" component={AddItem}/>
        </Router>
      </div>
    );
  }
}

export default App

