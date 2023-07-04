import React from "react";

const TodoView = (props) => {
    console.log(props)
  return (
    <div className="">
      <span>{props.index}</span>
        <p className="">{props.singleInfo}</p>
     
    </div>
  );
};

export default TodoView;
