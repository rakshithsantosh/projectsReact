import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodo((todo) => {
      return todo.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  };
  const removeTodo = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todo.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
