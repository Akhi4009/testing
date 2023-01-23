import { Item } from './constant';
import Todo from './todo/Todo';

const item:Item[]=[
  {text:"Learn React",id:1}, {text:"Learn React",id:1}
]

function App() {
  return (
    <div >
      <Todo item={item}/>
       
    </div>
  );
}

export default App;
