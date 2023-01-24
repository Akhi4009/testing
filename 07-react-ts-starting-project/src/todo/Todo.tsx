import React from 'react'
import { Item } from '../constant'
import TodoItem from './TodoItem'
import styles from "./Todo.module.css"
const Todo:React.FC<{item:Item[]}> = (props) => {
  return (
    <ul className={styles.todos}>
    
{props.item.map(item=>(
    <TodoItem key={item.id} text={item.text}/>
))}
    </ul>
  )
}

export default Todo
