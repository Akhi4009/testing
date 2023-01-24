import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import styles from "./Todo.module.css"
import { CartContext } from '../Context/CartContext'
const Todo:React.FC = () => {

  const todosctx=useContext(CartContext)
  return (
    <ul className={styles.todos}>
    
{todosctx.items.map(item=>(
    <TodoItem key={item.id} text={item.text}  onRemoveTodo={todosctx.removeTodo.bind(null,item.id)}/>
))}
    </ul>
  )
}

export default Todo
