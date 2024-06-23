import React, { useState } from 'react';
import './LoginComponent.css'; // Ensure to import the CSS file

function LoginComponent() {
    const [showPass, setShowPass] = useState(false);
    const [value, setValue] = useState('');
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleToggle = () => {
        setShowPass(!showPass);
    };

    const handleInputData = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="container">
            <button className="toggle-button" onClick={() => { setOpenSidebar(!openSidebar) }}>
                {openSidebar ? '×' : 'Open'}
            </button>

            <div className={`sidebar ${openSidebar ? 'open' : ''}`}>
                <button className="close-button" onClick={() => { setOpenSidebar(false) }}>×</button>
                <ul>
                    <li>new</li>
                    <li>data</li>
                    <li>is not</li>
                    <li>Good</li>
                </ul>
            </div>

            <br /><br />
            My DATA IS - <span>{value}</span>
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
