import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addNum = () => {
    setCount(count + 1);
  };

  const removeNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter Task</h1>

      <h2>Counter Value is : {count} </h2>

      <button onClick={addNum}>Add Value</button>

      <button onClick={removeNum} disabled = {count === 0}>Remove Value</button>

    </>
  )
}

export default App
