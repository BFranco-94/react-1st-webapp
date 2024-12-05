import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './assets/components/FormComponent.jsx'
import {useCallback, useState } from 'react'

function App() {


  //useState to manage the state of a propertie
  const [message, setMessage] = useState("Title no modified");

  const callback = useCallback(
    (data) =>{
      setMessage(data)
    },[message]
  )

  //This arrow function acts in component as component controlled
  const click = () => {
      setMessage("Title modified !!") 
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{message}</h1>
      <div className="card">
        <FormComponent placeholderA='User Name' placeholderB='Password' click={click} callBack={callback}/>
      </div>
      
    </>
  )
}

export default App
