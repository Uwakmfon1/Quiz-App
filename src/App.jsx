import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// build a quiz app in react 
// pseudo_code/algorithm:https://chatgpt.com/share/68e0a444-8784-8007-94e6-ab556862df55

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} className='bg-blue-200 px-2 py-2'
      >Increment</button>
      <button onClick={() => setCount(count - 1)} className='bg-red-200 px-2 py-2'
      >Decrement</button>
    </>
  )
}

export default App
