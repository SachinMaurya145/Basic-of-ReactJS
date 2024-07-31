import React, { useState } from 'react';

function CountCharacter() {
  const [text, setText] = useState('');
  const[color, setcolor] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleColor = ()=>{
    setcolor(!color)
  }

  return (
    <div>
      <h1>Count Character</h1>
      <input type="text" value={text} onChange={handleChange} />
      <p>Character Count: {text.length}</p>

      <h1>  && toggle Data </h1>
      <button style={{textTransform:"capitalize" , 
       backgroundColor: color ? "green" : "blue" , color:"white"}} onClick={handleColor}>  
       color chnage </button>

      {
        <div style={{textTransform:"uppercase" , color: color ? "green" : "red"}}> jarvis </div>
      }
    </div>
  );
}

export default CountCharacter;
