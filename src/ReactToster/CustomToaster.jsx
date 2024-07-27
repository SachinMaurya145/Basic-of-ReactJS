import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const colors = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 
  'Black', 'White', 'Gray', 'Cyan', 'Magenta', 'Lime', 'Indigo', 'Violet', 
  'Teal', 'Turquoise', 'Maroon', 'Navy'
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const CustomToaster = () => {
  const [targetColor, setTargetColor] = useState(getRandomColor());
  const [score, setScore] = useState(0);

  const checkColor = (color) => {
    if (color === targetColor) {
      toast.success('Correct! +1 point', {
        style: {
          backgroundColor: '#28a745',
          color: '#fff',
        },
        progressStyle: {
          backgroundColor: '#fff',
        },
      });
      setScore(score + 1);
      setTargetColor(getRandomColor());
    } else {
      toast.error('Incorrect! Try again.', {
        style: {
          backgroundColor: '#dc3545',
          color: '#fff',
        },
        progressStyle: {
          backgroundColor: '#fff',
        },
      });
    }
  };

  return (
    <div>
      <h3>Color Matching Game</h3>
      <p>Target Color: <span style={{ color: targetColor }}>{targetColor}</span></p>
      <p>Score: {score}</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => checkColor(color)}
            style={{
              backgroundColor: color.toLowerCase(),
              width: '100px',
              height: '100px',
              margin: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            {color}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CustomToaster;
