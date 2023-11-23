import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  function inc(){
    setCount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  )
}


export default App;