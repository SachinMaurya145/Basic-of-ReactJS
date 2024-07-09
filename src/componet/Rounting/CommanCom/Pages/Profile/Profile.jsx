// src/ItemPage.js
import React from 'react';

function ItemPage() {
  // Extract the ID from the URL
  const path = window.location.pathname;
  // console.log(" DAT APthe ",path);
  const id = path.split('/').pop(); // Assuming the last segment of the path is the ID
  // console.log(" DAT id nn ",id ,path);
  // const mainID = path.split('/');
  // console.log(" DAT id  ",mainID);

  let arrauy = [2,34,5,3,1];
  console.log(" 1 st data ", arrauy);
  let newDatavalue = arrauy.pop();
  let newDatavalue2 = arrauy;

  
  console.log(" 1 st data ", newDatavalue, " -- NEWW ----",  arrauy ,"--omg", newDatavalue2);
  return (
    <div>
      <h1>Item ID: {id}</h1>
      <div>
      <h1>NEW ROUTES  Page</h1>
      <a href="/item/1">Go to Item 1</a>
      <br />
      <a href="/item/2">Go to Item 2</a>
    </div>
    </div>
  );
}

export default ItemPage;
