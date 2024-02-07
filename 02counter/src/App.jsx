import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setCounter] = useState(15)


  // let counter = 15

   const addValue = () => {
     //  console.log("clicked", counter);
     // counter += 1; 
     if(counter !== 20){
      setCounter(counter + 1)
     }else{
      setCounter(20)
     }
     console.log(counter)
  }
  
  const removeValue = () => {
    if(counter !== 0){
    setCounter(counter - 1)
    } else{
      setCounter(0)
    }
    console.log(counter)
  }

  return (
    <>
    <h1>Chai or react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

//Assignment = value will be min 0 in remove value
//  and max 20 in add value.  ======> DONE

export default App
