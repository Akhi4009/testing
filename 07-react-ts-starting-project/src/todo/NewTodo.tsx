import React, { useRef } from 'react'

const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {

    const todoTextInputRef=useRef<HTMLInputElement>(null)
    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const enteredText=todoTextInputRef.current!.value
if(enteredText.trim().length===0){
    return
}
props.onAddTodo(enteredText)
    }
  return (
    <>
    <form onSubmit={handleSubmit} >
        <label htmlFor="text">Todo text</label>
        <input type="text" name="text" id="text" ref={todoTextInputRef} />
        <button type="submit">Add</button>

    </form>
    </>
  )
}

export default NewTodo