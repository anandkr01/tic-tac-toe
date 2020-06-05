import React, {useState} from 'react';

import './App.css';
import Square from './Square';
import {calculateWinner} from './helper'

function App() {

  const [value,setValue] = useState(Array(9).fill(null));
  const [isturnx,setturnx]=useState(true)
  const winner=calculateWinner(value);


  
  const clickchange=(i)=>
  { 
    let valuecopy=[...value];
    
    if (valuecopy[i]||winner)
    {
      
    }
    else if(isturnx)
    {
      console.log(isturnx)
        valuecopy[i]='X';
        setturnx(!isturnx);
    }
    else {
      
      valuecopy[i]='O';
      setturnx(!isturnx)
      console.log(isturnx)
    }
    
    setValue(valuecopy)
  }
  return (
    <>
    <div className="App">
      <Square value={value[0]} click={()=>clickchange(0)}/>
      <Square value={value[1]} click={()=>clickchange(1)}/>
      <Square value={value[2]} click={()=>clickchange(2)}/>
      <Square value={value[3]} click={()=>clickchange(3)}/>
      <Square value={value[4]} click={()=>clickchange(4)}/>
      <Square value={value[5]} click={()=>clickchange(5)}/>
      <Square value={value[6]} click={()=>clickchange(6)}/>
      <Square value={value[7]} click={()=>clickchange(7)}/>
      <Square value={value[8]} click={()=>clickchange(8)}/>

    </div>
  <p>winner : {winner? winner:null}</p>
  
    </>
  );
}

export default App;
