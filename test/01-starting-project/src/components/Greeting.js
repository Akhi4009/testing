import React,{useState} from 'react'

const Greeting = () => {
  const [changeText,setChangeText]=useState(false)
  const changeHandler=()=>{
    setChangeText(true)
  }
  return (
    <>
    <h1>Hello World</h1>
    {!changeText&&<p>It's good to see you</p>}
    {changeText&&<p>Changed!</p>}
    <button onClick={changeHandler}>Change Text</button>
    </>
  )
}

export default Greeting