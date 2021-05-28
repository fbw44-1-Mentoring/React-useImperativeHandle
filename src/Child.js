import React, { useImperativeHandle, useRef, useState } from "react";
 function Child(props,ref) {
const inputRef=useRef()
    const [counter, setCounter] = useState(0);
    useImperativeHandle(ref,()=>{
      
        return(
            { focus: () =>inputRef.current.focus(), 
              increment:()=>setCounter(counter+1)}
        )
    })
    console.log(props)
 
  return (
    <div>
      Child Component
      <h2>Counter: {counter}</h2>
      <input type="text" ref={inputRef}/>
    </div>
  );
}

export default React.forwardRef(Child)