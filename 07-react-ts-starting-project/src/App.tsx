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
  return (
    <div >
<NewTodo onAddTodo={todoHandler}/>
      <Todo item={todos}/>
       
    </div>
  );
}

export default App;
