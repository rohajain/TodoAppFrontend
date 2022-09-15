import React from 'react'
import './CounterFunc.css'

//func component(Cannot maintain state) , just have to pass reference of the function and not actually call it

function CounterFunc() {
  return (
    <div className="counterFunc">
        <button onClick={increment}>+1</button>
        <span className="countF">0</span>
    </div>
  )
}

function increment() {
    console.log("Increment Func")
}

export default CounterFunc