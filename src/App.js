import React from 'react'
//import MyComponent from './components/learning/MyComponent'
//import FuncComponent from './components/learning/FuncComponent'
//import CounterFunc from './components/counter/CounterFunc'
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css';
import './bootstrap.css';

function App() {

  // by="1" will give string , for sending integer use by={1} 
  return (
    <div className = 'App'> 
      {/* <Counter /> */}
      <TodoApp/>
    </div>
  )
}

// function LearningApp() {
//   return (
//     <div className="LearningApp">
//         My Hello World
//         <MyComponent></MyComponent>
//         <FuncComponent />
//     </div>
//   );
// }

export default App;
