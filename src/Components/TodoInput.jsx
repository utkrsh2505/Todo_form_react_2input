import React, { useState } from "react";

const TodoInput = ({ onSubmit }) => {
  const [state, setState] = useState({
    title: "",
    description: ""
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onAdd = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  return (
    <>
      <form onSubmit={onAdd}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />
      </form>
      <input
        style={{ backgroundColor: "black", color: "white", fontSize: "30px" }}
        onClick={onAdd}
        type="submit"
        value="Add"
      />
    </>
  );
};
export default TodoInput;
