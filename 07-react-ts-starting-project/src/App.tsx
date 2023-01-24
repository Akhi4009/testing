import { useState } from 'react';
import { Item } from './constant';
import NewTodo from './todo/NewTodo';
import Todo from './todo/Todo';




function App() {
 const [todos,setTodos]=useState<Item[]>([])
  const todoHandler=(text:string)=>{
    let newItem={
      text,
      id:Date.now()
    }

    setTodos([...todos,newItem])
}
const removeTodoHandler=(id:number)=>{
setTodos(prev=>prev.filter(ele=>ele.id!==id))
}
  return (
    <div >
<NewTodo onAddTodo={todoHandler}/>
      <Todo item={todos} onRemoveTodo={removeTodoHandler}/>
       
    </div>
  );
}

export default App;
