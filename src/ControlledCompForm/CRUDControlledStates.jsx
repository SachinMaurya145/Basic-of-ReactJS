import React, { useState } from 'react';

function FormField({ type, name, placeholder, value, onChange }) {
  return (
    <label>
      {placeholder}:
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  );
}

function PasswordCriteria({ criteria }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {criteria.map((item, index) => (
        <li key={index} style={{ color: item.valid ? 'blue' : 'black' }}>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function CRUDControlledStates() {
  const [allData, setAllData] = useState([]);
  const [formEdit, setFormEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [formState, setFormState] = useState({
    userName: '',
    password: '',
    userEmail: '',
    message: '',
  });

  const handleSort = () => {
    const sortedData = [...allData].sort((a, b) => {
      if (sortAsc) {
        return a.userName.localeCompare(b.userName);
      } else {
        return b.userName.localeCompare(a.userName);
      }
    });
    setAllData(sortedData);
    setSortAsc(!sortAsc);
  };


  const hanldedelete = (value) => {
    const newValue = allData.filter((val, index) => {
      return index !== value;
    });
    setAllData(newValue);
    console.log('value->>>> ', newValue);
  }
  console.log('value->>>> ', allData);

  const hanldeEdit = (index) => {
    setFormEdit(true);
    console.log('edit->>>> ', index);
    setEditIndex(index);
    setFormState(allData[index]);
    console.log('edit Data index ->>>> ', allData[index]);
  }

  const [passwordCriteria, setPasswordCriteria] = useState([
    { text: 'Minimum length of 8 characters', valid: false },
    { text: 'At least one uppercase letter', valid: false },
    { text: 'At least one lowercase letter', valid: false },
    { text: 'At least one numeric digit', valid: false },
    { text: 'At least one special character', valid: false },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (name === 'password') {
      validatePassword(value);
    }
  };

  const validateUsername = (userName) => {
    if (userName.length < 3) {
      return 'The username must be at least 3 characters long';
    }
    if (!/^[a-zA-Z]+$/.test(userName)) {
      return 'The username can only contain alphabetic characters';
    }
    return null;
  };

  const validateEmail = (email) => {
    const emailRegex = /^(?=.*[A-Z])[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'The email address must contain at least one uppercase letter and be in a valid format';
    }
    return null;
  };

  const validatePassword = (password) => {

    const criteria = [
      { text: 'Minimum length of 8 characters', valid: password.length >= 8 },
      { text: 'At least one uppercase letter', valid: /[A-Z]/.test(password) },
      { text: 'At least one lowercase letter', valid: /[a-z]/.test(password) },
      { text: 'At least one numeric digit', valid: /\d/.test(password) },
      { text: 'At least one special character', valid: /[@$!%*?&]/.test(password) },
    ];
    setPasswordCriteria(criteria);
  };

  const handleSubmit = () => {
    const { userName, password, userEmail, message } = formState;

    // Validate that all fields are filled out
    // if (!userName || !password || !userEmail || !message) {
    //   alert('All fields must be filled out!');
    //   return;
    // }

    // Validate username
    const usernameError = validateUsername(userName);
    // if (usernameError) {
    //   alert(usernameError);
    //   setFormState((prev) => ({ ...prev, userName: '' }));
    //   return;
    // }

    // Validate email
    const emailError = validateEmail(userEmail);
    // if (emailError) {
    //   alert(emailError);
    //   setFormState((prev) => ({ ...prev, userEmail: '' }));
    //   return;
    // }

    // // Check if password criteria are met
    // if (passwordCriteria.some((item) => !item.valid)) {
    //   alert('Password does not meet the required criteria!');
    //   return;
    // }

    // Check for duplicate username or email
    if (formEdit) {
      // Update the existing entry
      const updatedData = allData.map((data, index) =>
        index === editIndex ? formState : data
      );
      setAllData(updatedData);
      setFormEdit(false);
      setEditIndex(null);
    } else {
      // Check for duplicate username or email
      const isDuplicate = allData.some(data =>
        data.userEmail === userEmail || data.userName === userName
      );
      if (isDuplicate) {
        alert('Data with this email or username already exists!');
        return;
      }
      // Add the new data
      setAllData((prevData) => [...prevData, formState]);
    }

    // Add the new data and reset the form state
    setFormState({
      userName: '',
      password: '',
      userEmail: '',
      message: '',
    });
  };



  return (
    <div>
      <h3>This is a React CRUD - colSpan="6" --  No data found -- <div> <h3 style={{ color: 'blue', marginLeft: '200px' }}>All Validation</h3></div></h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
        {['userName', 'userEmail', 'password', 'message'].map((field) => (
          <FormField
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={`Enter your ${field}`}
            value={formState[field]}
            onChange={handleChange}
          />
        ))}
        <PasswordCriteria criteria={passwordCriteria} />
        <button style={{ marginTop: '20px' }} onClick={handleSubmit}>
          {formEdit ? "update" : "submit"} Data
        </button>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '80%' }}>
          <h4>Submitted Data: {allData.length}</h4>
          {allData.length ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th onClick={handleSort} style={{ cursor: 'pointer' }}>
                    Username {sortAsc ? '▲' : '▼'}
                  </th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.userName}</td>
                    <td>{data.userEmail}</td>
                    <td>{data.message}</td>
                    <td>{data.password}</td>
                    <td>
                      <button onClick={() => hanldedelete(index)}>Delete</button>
                      <button onClick={() => hanldeEdit(index)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
              <tbody>
                <tr>
                  <td colSpan="6">No data found</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}

export default CRUDControlledStates;
