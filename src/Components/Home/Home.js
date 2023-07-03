import React, { useState } from "react";
import ToDos from "../ToDos/ToDos";
import NewTodo from "../NewTodo/NewTodo";

const toDosinfo = ["data1", "data2"];

const Home = () => {
  const [info, setInfo] = useState(toDosinfo);

  const handleNewTodo = (newTodoInfo) => {
    setInfo([...info,newTodoInfo]);
  };
  return (
    <div>
      <h1 className="font-bold text-2xl">Todos for you</h1>
      <NewTodo newTodo={handleNewTodo}></NewTodo>
      <ToDos info={info}></ToDos>
    </div>
  );
};

export default Home;
