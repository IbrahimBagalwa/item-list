
import './App.css';
import React, { Component } from 'react'
import ItemList from './component/itemList/item.component';
import Navbar from './component/navbar/navbar.component';
import AddItem from './component/addItem/addItem.component';
import { ItemProvider } from './component/context/context.component';

export class App extends Component {
  render() {
    
    return (
      <div className="App">
        <ItemProvider>
           <Navbar/>
        <div className="container">
          <AddItem/>
          <ItemList/>
        </div>
        </ItemProvider>
       
      </div>
    );
  }
}

export default App

