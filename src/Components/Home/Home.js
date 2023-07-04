import React, { useState } from "react";
import ToDos from "../ToDos/ToDos";
import NewTodo from "../NewTodo/NewTodo";

const toDosinfo = [];

const Home = () => {
  const [info, setInfo] = useState([toDosinfo]);

  const handleNewTodo = (newTodoInfo) => {
    setInfo([...info, newTodoInfo]);
  };
  return (
    <div className="flex justify-center">
      <div className="w-8/12  border-gray-200 border-2 mt-3 flex flex-col p-2 shadow ">
        <h1 className="font-bold text-2xl">Todos for you</h1>
        <NewTodo  newTodo={handleNewTodo}></NewTodo>
        <ToDos info={info}></ToDos>
      </div>
    </div>
  );
};

export default Home;
