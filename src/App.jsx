// import { useState } from 'react';
import './App.css';
// import BoostrapTesting from './BoostrapTesting';
// import { Card } from 'react-bootstrap';
// import RenderData from './RenderData';
// import { blog } from './Data/ApiResponse';
// import LoginComponent from './LoginComponent';
// import ModalComponent from './ModalComponent';
// import OusAns from './OusAns';
// import ParentToChildData from './ParentToChildData';
// import TodoList from './componet/TodoList';
import TabSystem from './componet/TabSystem';
import ToasterComponent from './ReactToster/ToasterComponent';
import CustomToaster from './ReactToster/CustomToaster';
function App() {

  // const dataValue = {
  //   Name: "JAck",
  //   age: "55"
  // }

  // const [mob, setMob] = useState("");
  // const newArray = [66, 113, 34, , 24, 3, 353, 35, 3, 535, 456, 7, 567, 6, 76];

  // const handleGame = () => {
  //   setMob(!mob);
  // }

  return (
    <div className="App">

      <CustomToaster />

      {/* <LoginComponent/> */}
      {/* <BoostrapTesting data={{ dataValue, newArray }} >
        <h1> This is a children props  </h1>
      </BoostrapTesting>



      <button onClick={handleGame}> Game </button>

      <ChildFunction /> */}

    </div>
  );
}

export default App;


// function ChildFunction() {

//   console.log(" blog NAMES", blog);

//   return (
//     <div>
//       <RenderData />


//       {/* {blog.map((value, index)=>{
//       return(
//         <RenderData  key={index} dataValue={value} />
//       )
//      })} */}
//     </div>
//   );


// }
