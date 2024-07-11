import React, { useState } from 'react';

function CRUDControlledStates() {
  const [allData, setAllData] = useState([]);
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
    userEmail: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Check for duplicates based on email
    const isDuplicate = allData.some(data => 
      data.userEmail === formState.userEmail || 
      data.number === formState.number || 
      data.userName === formState.userName
    );
  

    if (!isDuplicate) {
      setAllData((prevData) => [...prevData, formState]);
      setFormState({
        userName: "",
        password: "",
        userEmail: "",
        number: "",
        message: "",
      });
    } else {
      alert("Data with this email already exists!");
    }
  };


  return (
    <div>
      <h3>This is a React CRUD - Controlled - with States -- short data</h3>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter your username"
            autoComplete="off"
            onChange={handleChange}
            name="userName"
            value={formState.userName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            onChange={handleChange}
            name="userEmail"
            value={formState.userEmail}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            name="password"
            value={formState.password}
          />
        </label>
        <label>
          Number:
          <input
            type="number"
            placeholder="Enter your number"
            autoComplete="off"
            onChange={handleChange}
            name="number"
            value={formState.number}
          />
        </label>
        <label>
          Message:
          <input
            type="text"
            placeholder="Enter your message"
            autoComplete="off"
            onChange={handleChange}
            name="message"
            value={formState.message}
          />
        </label>
        <button style={{ marginTop: '20px' }} onClick={handleSubmit}>Submit Data</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Submitted Data:</h4>
        <ul>
          {allData.map((data, index) => (
            <li key={index}>
              {data.userName} - {data.userEmail} - {data.number} - {data.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CRUDControlledStates;
