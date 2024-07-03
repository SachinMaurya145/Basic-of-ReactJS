import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));   // fetch data from server and use it the we  use  parse 
    // to use data as a obej ect  
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(()=>{
    const storeData = JSON.parse(localStorage.getItem('jarvis'));
    console.log(storeData);
  })

  useEffect(()=>{
    if(todos.length){
      // const data = JSON.stringify(localStorage.setItem('todos'));  // X
      const data =  localStorage.setItem('jarvis', JSON.stringify(todos));
      console.log(" jarvis ",  data);
    }
  },[todos]);

  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    if(todos.length){
      localStorage.setItem('todos', JSON.stringify(todos));
    // when user save  data on the server then use stringify  to save in the from of string so  that we use 
    // data in proper way 

    }
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (dele) => {
    const newTodos = todos.filter((todo) => todo !== dele);
    // remove matching id -- is value is === to delete -- reverse logic use  
    setTodos(newTodos);
  };

  const handleEditData = (todo) => {
    console.log(" EDIT ", todo);
    setIsEditing(true);
    setInputValue(todo);
    setCurrentTodo(todo);
  };

  const handleData = (e) => {
    e.preventDefault();   // data is not  refreshing 
    if (inputValue) {   // value have then 
      if (isEditing) {    // edit is  true 
        const updatedTodos = todos.map((todo) =>
          todo === currentTodo ? inputValue : todo    // 1st check value is == then update value - else - save todo 
        );
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentTodo(null);
      } else {   // edit is  false
        setTodos([...todos, inputValue]);   // store all todo data here 
      }
      setInputValue('');   // epaty the input in last 
    }
  };

  return (
    <div>
      <h3>This is A Todo List</h3>
      <form onSubmit={handleData}>
        <input type="text" name="todo" value={inputValue} onChange={handleInputChange} />
        <button type="submit">{isEditing ? 'Update' : 'Save'}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div style={{ display: 'flex' }}>
              <div style={{ marginLeft: '20px', color: 'blue', textTransform: 'capitalize' }}>{todo}</div>
              <div style={{ marginLeft: '20px', color: 'green', cursor: 'pointer' }} onClick={() => handleEditData(todo)}>Edit</div>
              <div style={{ marginLeft: '20px', color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(todo)}>Delete</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
