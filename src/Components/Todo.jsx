import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const Todo = () => {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      title,
      description,
      id: list.length + 1,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };
  return (
    <>
      <h1>Todo</h1>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={list.filter((item) => !item.status)} />
      <button
        style={{ backgroundColor: "black", color: "white", fontSize: "30px" }}
        onClick={() => setShowCompleted(!showCompleted)}
      >
        Toggle show complete
      </button>
      {showCompleted && <TodoList data={list.filter((item) => item.status)} />}
    </>
  );
};
export default Todo;
