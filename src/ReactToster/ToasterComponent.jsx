import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToasterComponent = () => {
  const notify = () => {
    toast.success('This is a success message!');
    toast.error('This is an error message!');
    toast.info('This is an info message!');
    toast.warn('This is a warning message!');
  };

  return (
    <div>

    <h3> React Toster </h3>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default ToasterComponent;
