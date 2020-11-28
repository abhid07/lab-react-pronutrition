import React, { Component } from 'react'
import FoodBox from './Components/FoodBox'
import Nav from './Components/Nav'
import data from './Resources/data'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    //display 4 items
    this.state = { items : [...data.items].slice(0,4)}

  }
  //searching item

  search = (e) => {
    const food = e.target.value
    this.setState(() => {
      return {
        items: data.items.filter(item => {
          if (item.name.toLowerCase().includes(food.toLowerCase()))
          {
              return true
          }
          else
          {
            return false
          }
        }).map(item => item).slice(0, 4)
      }
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        {/* sending inputted value to FoodBox component */}
        <FoodBox {...this.state} search={this.search}/>
      </div>
    )
  }
}
