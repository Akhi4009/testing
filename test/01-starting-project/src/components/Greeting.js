import React,{useState} from 'react'
import Output from './Output'

const Greeting = () => {
  const [changeText,setChangeText]=useState(false)
  const changeHandler=()=>{
    setChangeText(true)
  }
  return (
    <>
    <h1>Hello World</h1>
    {!changeText&&<Output>It's good to see you</Output>}
    {changeText&&<Output>Changed!</Output>}
    <button onClick={changeHandler}>Change Text</button>
    </>
  )
}

export default Greeting