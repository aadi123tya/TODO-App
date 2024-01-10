import { useState } from "react";

import "./App.css";
import AddTodo from "./component/Addtodo";
import Todos from "./component/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div >
      <h1 className=" font-extrabold text-8xl">TODO</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
