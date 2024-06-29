import React, { useState } from 'react';
import { blog } from './Data/ApiResponse';

function ParentToChildData() {
  // State to hold the blog data
  const [data] = useState(blog);
  // State to hold the list of IDs whose answers should be shown
  const [visibleIds, setVisibleIds] = useState([]);

  console.log("ALL DATA", data);
  console.log("VISIBLE IDS", visibleIds);

  // Function to handle clicks and toggle the visibility of answers
  const handleToggleVisibility = (id) => {
    // check the 1st id is have or not -- if have then do it --  
    if (visibleIds.includes(id)) {
      // Remove the ID from the array if it already exists
      setVisibleIds(visibleIds.filter(item => item !== id)); // using rever -- logic 
    } else {
      // Add the ID to the array if it does not exist
      setVisibleIds([...visibleIds, id]);
    }
  };

  return (
    <div>
      {/* Pass data and other props to ChildItems */}
      <ChildItems 
        data={data} 
        visibleIds={visibleIds}
        onToggleVisibility={handleToggleVisibility}
      />
    </div>
  );
}

export default ParentToChildData;

function ChildItems({ data, visibleIds, onToggleVisibility }) {
  return (
    <div>
      {/* Map through the data and render each item */}
      {data.map((val, index) => (
        <div key={index}>
          {/* Clickable element to show or hide the answer */}
          <div
            style={{ color: "red", backgroundColor: "sky", cursor: "pointer" }}
            onClick={() => onToggleVisibility(val.id)}
          >
            {val.ous}
          </div>
          {/* Conditionally render the answer if the ID is in visibleIds */}
          {visibleIds.includes(val.id) && (
            <div style={{ color: "green", backgroundColor: "sky" }}>
              {val.ans}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
