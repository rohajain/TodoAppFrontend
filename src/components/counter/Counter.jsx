import React , {Component} from 'react'
import './Counter.css'

//Class component needs to be used for maintaining state.

class Counter extends Component {

  constructor() {
    // call to super is required for finding this in a constructor
    super()
    // here we difined the intial state
    this.state = {
      counter : 0
    }
    // if you want to use this in any other method then it needs to be binded here. or alternate option is to use the arrow operator in function
    //eg .increment = () => { 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="counter">
        {/*Comment : incrementMethod is binded to parents increment method and called whenever its called in child class*/}
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/> 
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }  

reset() {
  this.setState(
    () => {
      return {counter:0}
    }   
  )
}

  // This method is called by child component while setting properties.
  increment (by) {  //Update the state
    /* BEST PRACTICES */
      this.setState (
        (prevState) => {
          return {counter : prevState.counter + by}
        });
    }

  // This method is called by child component while setting properties.
  decrement (by) {  //Update the state
    /* BEST PRACTICES */
      this.setState (
        (prevState) => {
          return {counter : prevState.counter - by}
        });
    }
}

export class CounterButton extends Component{

  // Best Practices : Define intial state in a constructor
  //initial state : counter : 0

  constructor() {
    // call to super is required for finding this in a constructor
    super()
    // here we difined the intial state
    this.state = {
      counter : 0
    }
    // if you want to use this in any other method then it needs to be binded here. or alternate option is to use the arrow operator in function
    //eg .increment = () => { 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }


  render() {
    //const style = {fontSize : "30px",padding:"15px 30px"};  // changed style using javascript
    return (
      <div className="counter">
          <button onClick={this.increment}>+{this.props.by}</button>
          <button onClick={this.decrement}>-{this.props.by}</button>
          {/*<span className="count">{this.state.counter}</span>*/}
      </div>
    )
  }
  
  decrement () { 
      this.props.decrementMethod(this.props.by)
  }

  increment () {  //Update the state
  // increment = () => {   
    //console.log("Increment")

    // Line 33:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    //this.state.counter++;  Bad Practice

    //For changing state use setstate always, this is binded on constructor
    /*this.setState ({
      counter : this.state.counter + this.props.by
    });*/

    // This will call increment method of counter class with by parameter
    this.props.incrementMethod(this.props.by)
  }
}



export default Counter