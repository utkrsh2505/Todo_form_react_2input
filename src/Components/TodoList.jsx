function TodoList({ data }) {
  return (
    <>
      <ul>
        {data.map((item) => (
          <li id={item.id}>
            {item.title} - {item.description} -{" "}
            {item.status ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </>
  );
}
export default TodoList;
