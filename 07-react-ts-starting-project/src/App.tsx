import { useState } from 'react';
import { Item } from './constant';
import CartContextProvider from './Context/CartContext';
import NewTodo from './todo/NewTodo';
import Todo from './todo/Todo';




function App() {

  return (
    <CartContextProvider >
<NewTodo />
      <Todo/>
       
    </CartContextProvider>
  );
}

export default App;
