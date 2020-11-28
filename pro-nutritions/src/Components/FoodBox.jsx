import React, { Component } from 'react'
import DisplayItems from './DisplayItems'


export default class FoodBox extends Component {
    constructor(props)
    {
        super(props)
        //creating calories array to store selected items
        this.state={
            calories : []
        }
    }
    
    //displaying items when clicked on + button 
    getValue = (e)=>{
        const cal = parseInt(document.querySelector(`.${e.target.name}`).value)
        let total = (cal* document.querySelector(`#${e.target.name}`).innerHTML);
        let cnt = 0

        //checking if item name is present in calories array

        if(this.state.calories.includes(e.target.name))
        {
            //changing value of selected item in ui 
           let p = document.querySelector(`.${e.target.name+cnt}`)
            p.innerHTML = (cal + " " + e.target.name + "=" + total)
                        let btn = document.createElement('button')
            let text = document.createTextNode("X")
            btn.appendChild(text)
            p.appendChild(btn)

            //function to remove selected item if added more than one times.
            btn.onclick = () => {

                //storing items name to remove value
                var index = this.state.calories.indexOf(e.target.name)
                //removing item in array using splice method
                this.state.calories.splice(index, 1);
                //removing item in ui 
                p.style.display = 'none'
            }
        }

        // if item name is not present then 

        else
        {
            //pushing item name into array
            this.state.calories.push(e.target.name)
            let p = document.createElement('p')
            //adding class name to p tag
            p.classList.add(e.target.name+cnt)
            p.innerHTML = (cal + " " + e.target.name + " = " + total)

            let btn = document.createElement('button')
            let text = document.createTextNode("X")
            btn.appendChild(text)
            p.appendChild(btn)

            //function to remove selected item if its added only once
            btn.onclick = ()=>{
                var index = this.state.calories.indexOf(e.target.name)
                this.state.calories.splice(index,1);
                console.log(this.state.calories);
                p.style.display='none'
            }
            
            document.getElementById('food').appendChild(p)
        }
        console.log(this.state.calories)
    }

    render() {
        return (
            <div className="container">
                <div className="left-container"> 
                    <div className="search">
                        <h3>Search</h3>
                        <input type="text" onChange={this.props.search}/>
                    </div>
                    {/* sending all data to DisplayItems component */}
                    {this.props.items.map(item=><DisplayItems key={item.id} item={item} getValue ={this.getValue}/>)}
                </div>
                <div className="right-container">
                    <h3>Today's Food</h3>
                    <div id="food">
                    </div>
                </div>
            </div>
        )
    }
}
