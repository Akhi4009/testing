import React from 'react'
import { Item } from '../constant'
import TodoItem from './TodoItem'
const Todo:React.FC<{item:Item[]}> = (props) => {
  return (
    <ul>
    
{props.item.map(item=>(
    <TodoItem key={item.id} text={item.text}/>
))}
    </ul>
  )
}

export default Todo
