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
  const [formState, setFormState] = useState({
    userName: '',
    password: '',
    userEmail: '',
    message: '',
  });

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
    console.log('pass->>>> ', password)
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

    // Check if password criteria are met
    if (passwordCriteria.some((item) => !item.valid)) {
      alert('Password does not meet the required criteria!');
      return;
    }

    // Check for duplicate username or email
    const isDuplicate = allData.some(data =>
      data.userEmail === userEmail || data.userName === userName
    );
    if (isDuplicate) {
      alert('Data with this email or username already exists!');
      return;
    }

    // Add the new data and reset the form state
    setAllData((prevData) => [...prevData, formState]);
    setFormState({
      userName: '',
      password: '',
      userEmail: '',
      message: '',
    });
  };

  return (
    <div>
       <h3>This is a React CRUD - Controlled - with States -- <div> <h3 style={{color:'blue',marginLeft: '200px'  }}>All Validation</h3></div></h3>
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
          Submit Data
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h4>Submitted Data: {allData.length}</h4>
        {allData.length ? (
          <ul>
            {allData.map((data, index) => (
              <li key={index}>
                {data.userName} - {data.userEmail} - {data.message} - PASS - {data.password}
              </li>
            ))}
          </ul>
        ) : (
          'No data found'
        )}
      </div>
    </div>
  );
}

export default CRUDControlledStates;
