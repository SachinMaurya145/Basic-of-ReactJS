import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToaster = () => {
  const notify = () => {
    toast.success('This is a success message!', {
      style: {
        backgroundColor: '#28a745',
        color: '#fff'
      },
      progressStyle: {
        backgroundColor: '#fff'
      }
    });

    toast.error('This is an error message!', {
      style: {
        backgroundColor: '#dc3545',
        color: '#fff'
      },
      progressStyle: {
        backgroundColor: '#fff'
      }
    });

    toast.info('This is an info message!', {
      style: {
        backgroundColor: '#17a2b8',
        color: '#fff'
      },
      progressStyle: {
        backgroundColor: '#fff'
      }
    });

    toast.warn('This is a warning message!', {
      style: {
        backgroundColor: '#ffc107',
        color: '#000'
      },
      progressStyle: {
        backgroundColor: '#000'
      }
    });
  };

  return (
    <div>
      <h3> CustomToaster  -  React -  JS</h3>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default CustomToaster;
