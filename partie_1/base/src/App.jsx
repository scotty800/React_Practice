import { useState } from 'react'

import './App.css'

function HelloWorld() {
  return <h1>Hello, World!</h1> 
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
}

function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age : {props.age}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Counter />
      <UserCard name="Alice" age={30} />
      <UserCard name="Bob" age={25} />
    </div>
  )
}

export default App
