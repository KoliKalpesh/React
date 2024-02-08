

import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]= useState(0);

  //let counter = 15

  const addValue=()=>{
    // console.log("value added",Math.random())

    if(counter>=20){
      setCounter(counter)
    }else{
      setCounter(counter+1)
    }
  }

  const removeValue=(()=>{
    if(counter<=0){
      setCounter(counter)
    }else{
      setCounter(counter-1)
    }
    
    
  })

 
  return (
    <>
      <h1>Kalpesh</h1>
      <h2>counter value is : {counter}</h2>
      <button onClick={addValue}>Add value  {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value  {counter}</button>
      
    </>
  )
}

export default App
