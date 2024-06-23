import React, { useState } from 'react'

function RenderData(props) {
  const[value, setValue] = useState("jarvis");
  const[newValue, setNewValue] = useState(false);

    // console.log(" ALL DATA HER E", props);

    const  Data=()=>{
      setValue(" Normal jarvis start ");
      console.log("1111");
      console.log(" Hello JARVIS ");
      setValue(" Normal jarvis end ");
      console.log("22222");
    }

    const newdata=(a,b)=> {
      console.log( " ++ DAT A", a+b);
      setValue(" Hiper jarvis");
    }

  return (
    <> 
    <div > wellcom the <p style={{color:'red'}} > {value}</p> world  </div> 
       {/* <div> this is s  key - {props.dataValue.id} </div> */}
       <button onClick={Data}> normal Click button  </button>

       <button onClick={()=> newdata(4,5)}> hyper on  click </button>
    

    <h2> the new value is {newValue}</h2>

       <button onClick={()=>{setNewValue(!newValue)}}> {newValue ? "show" : "hide"}</button>
    </>
  )
}

export default RenderData;