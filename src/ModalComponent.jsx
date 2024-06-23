// ModalComponent.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalComponent() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveChanges = () => {
    console.log('Input Value:', inputValue);
    // Add any additional logic for saving changes here
    handleClose();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Bootstrap Modal with Input Example</h1>
        <Button variant="primary" onClick={handleShow}>
          Launch modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicInput">
                <Form.Label>Enter something</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter text" 
                  value={inputValue}
                  onChange={handleInputChange} 
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    </div>
  );
}

export default ModalComponent;
