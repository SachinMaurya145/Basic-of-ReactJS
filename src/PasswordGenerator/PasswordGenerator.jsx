// src/PasswordGenerator.js
import React, { useState } from 'react';
import './PasswordGenerator.css'; // Make sure to import the CSS file

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(true);
    const [passwordCriteria, setPasswordCriteria] = useState([]);

    const generatePassword = () => {
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        //  if (includeUppercase) charset = charset + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSpecial) charset += '@$!%*?&';

        if (charset === '') return;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }

        setPassword(generatedPassword);
        validatePassword(generatedPassword);
    };

    const handleLengthChange = (e) => {
        setLength(e.target.value);
    };

    const validatePassword = (password) => {
        const criteria = [
            { text: 'Minimum length of 8 characters', valid: password.length >= 8 },
            { text: 'At least one uppercase letter', valid: /[A-Z]/.test(password) },
            { text: 'At least one lowercase letter', valid: /[a-z]/.test(password) },
            { text: 'At least one numeric digit', valid: /\d/.test(password) },
            { text: 'At least one special character', valid: /[@$!%*?&]/.test(password) },
        ];
        console.log("valid @@--  ",criteria.map((val)=> val.valid));
        setPasswordCriteria(criteria);
    };

    return (
        <div>
            <h1>Password Generator</h1>
            <div>
                <label htmlFor="length">Password Length: </label>
                <input
                    type="number"
                    id="length"
                    value={length}
                    onChange={handleLengthChange}
                    min="1"
                    max="100"
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={() => setIncludeUppercase(!includeUppercase)}
                    />
                    Include Uppercase Letters
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeLowercase}
                        onChange={() => setIncludeLowercase(!includeLowercase)}
                    />
                    Include Lowercase Letters
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                    />
                    Include Numbers
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSpecial}
                        onChange={() => setIncludeSpecial(!includeSpecial)}
                    />
                    Include Special Characters
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            {password ? (
                <div>
                    <h3>Generated Password:</h3>
                    <p>{password}</p>
                    <h4>Validation Criteria:</h4>
                    <ul>
                        {passwordCriteria.map((criterion, index) => (
                            <li key={index} style={{ color: criterion.valid ? 'green' : 'red' }}>
                                {criterion.text}
                            </li>
                        ))}
                    </ul>
                </div>
            ): <div style={{color:'red', marginTop:'22px', textTransform:"capitalize"}}> "genrate random Password"</div> }
        </div>
    );
};

export default PasswordGenerator;
