import React, { useState } from "react";

const CreatenewTodo = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  // const countTasks = () => {
  //   if (count === 0) {
  //     return "No Tasks";
  //   } else {
  //     return `Tasks : ${count}`;
  //   }
  // };
  return (
    <>
      <h1>Tasks : {count}</h1>
      <button onClick={handleClick}>ADD TASK</button>
    </>
  );
};

export default CreatenewTodo;
