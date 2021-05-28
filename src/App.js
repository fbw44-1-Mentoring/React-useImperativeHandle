import React, { useRef, useEffect } from "react";
import Child from "./Child";

function App() {

const heading =useRef()


useEffect(()=>{
  console.dir(heading.current)
  heading.current.focus()
},[])



  return (
    <div className="App">
      <h1>useImperativeHandle Hook</h1>
      <button onClick={()=>heading.current.increment()}>increment</button>
      <Child ref={heading} />
    
    </div>
  );
}

export default App;