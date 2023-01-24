import React, { useRef,useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import styles from "./NewTodo.module.css"

const NewTodo:React.FC = () => {

    const todoTextInputRef=useRef<HTMLInputElement>(null)
    const todosctx=useContext(CartContext)
    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const enteredText=todoTextInputRef.current!.value
if(enteredText.trim().length===0){
    return
}
todosctx.addTodo(enteredText)

    }
  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit} >
        <label htmlFor="text">Todo text</label>
        <input type="text" name="text" id="text" ref={todoTextInputRef} />
        <button type="submit">Add</button>

    </form>
    </>
  )
}

export default NewTodo