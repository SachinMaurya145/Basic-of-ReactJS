import React, { useState } from 'react';

function LoginComponent() {
    const [showPass, setShowPass] = useState(false);
    const [value, setValue] = useState('');

    const handleToggle = () => {
        setShowPass(!showPass);
    };

    const handleInputData = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div>
            <br /><br />
            My DATA IS - <span style={{ color: 'red' }}>{value}</span>
            <br /><br />
            <input 
                type={showPass ? "text" : "password"} 
                value={value} 
                onChange={handleInputData} 
            />
            <button onClick={handleToggle}>
                {showPass ? "hide" : "show"}
            </button>
        </div>
    );
}

export default LoginComponent;
