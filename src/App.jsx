import { useState } from 'react';
import './App.css';
import BoostrapTesting from './BoostrapTesting';
import { Card } from 'react-bootstrap';
import { blog } from './Data/ApiResponse';

function App() {

  const dataValue = {
    Name: "JAck",
    age: "55"
  }

  const [mob, setMob] = useState("");
  const newArray = [66, 113, 34, , 24, 3, 353, 35, 3, 535, 456, 7, 567, 6, 76];

  const handleGame = () => {
    setMob(!mob); 
  }

  return (
    <div className="App">
      <BoostrapTesting data={{ dataValue, newArray }} >
        <h1> This is a children props  </h1> 
      </BoostrapTesting>   

    
      {/* {dataValue.Name}
      <div> {newArray.map((responseValue, index) => (
        <div key={index}> index - {index}   &&  value is :-  {responseValue} </div>
      ))}</div>
      {
        (mob) ?
          <div style={{ backgroundColor: "green" }}> {dataValue.age} </div>
          :
          <div style={{ backgroundColor: "green" }}>  {dataValue.Name}</div>
      } */}
        
       <button onClick={handleGame}> Game </button> 

       <ChildFunction />

    </div>
  );
}

export default App;


function ChildFunction() {

    console.log(" blog NAMES", blog);

    return (
      <div>
        {blog.map((variant, index) => (
          <Card
            // bg={variant.toLowerCase()}
            key={index} // Use index as key if `variant` is not unique or doesn't have a unique identifier
            // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>{variant.title} Card Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant.userId} Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
    

}
