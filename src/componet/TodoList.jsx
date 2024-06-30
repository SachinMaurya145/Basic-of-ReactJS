import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("DATA", e.target.value);
  };

  const handleDelete = (dele) => {
    console.log("delete value", dele);
    const newValue = todos.filter((val) => val !== dele);
    setTodos(newValue);
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(" PREvent Value", inputValue);
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
    console.log("ALL DAT A", todos);
  };

  return (
    <div>
      <h3>This is A Todo List</h3>
      <form onSubmit={handleData}>
        <input type="text" name="todo" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Save</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div style={{ display: "flex" }}>
              <div style={{ marginLeft: "20px", color: "blue", textTransform: 'capitalize' }}>{todo}</div>
              <div style={{ marginLeft: "20px", color: "green", cursor: "pointer" }}>Edit</div>
              <div style={{ marginLeft: "20px", color: "red", cursor: "pointer" }} onClick={() => handleDelete(todo)}>delete</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
