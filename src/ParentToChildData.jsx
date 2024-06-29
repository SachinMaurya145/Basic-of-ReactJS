import React, { useState } from 'react';
import { blog } from './Data/ApiResponse';

function ParentToChildData() {

  const [data, setData] = useState(blog);
  const [valueId, setValueId] = useState([]);
  console.log(" ALL DATA ", data);
  console.log(" VALI valueId ", valueId)

  const handleDataFun = (id) => {
    // 4 
    console.log(" DATA ", id);
    if (valueId.includes(id)) {
      console.log(" ALL 6564646--- ", valueId);
      setValueId(valueId.filter(item => item !== id));
    
    }
    else {
      console.log(" ALL 6564646---???? ", valueId);
      setValueId([...valueId, id]);
    }
  }



  return (

    <div>
      <div>
        {
          data.map((val, index) => (
            <div key={index}>
              <div style={{ color: "red", backgroundColor: "sky", cursor: "pointer" }} onClick={() => handleDataFun(val.id)} >
                {val.ous}
              </div>
              {valueId.includes(val.id) && <div style={{ color: "green", backgroundColor: "sky" }}>
                {val.ans}
              </div>}
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default ParentToChildData;


















