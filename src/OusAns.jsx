import React, { useState } from "react";
import { blog } from "./Data/ApiResponse";

const OusAns = () => {
    const [ousOpen, setOusOpen] = useState(null); // Changed initial state to null

    const newData = blog;

    const  handleData = (id) =>{
        if(ousOpen === id){
            setOusOpen(null);
        }
        else{
            setOusOpen(id);
        }
    }

    console.log("ALL DATA", ousOpen);

    return(
        <div>
              NEW COMPONET _ SSS 

                <div>
                    {
                        newData.map((val, index)=>(
                        <ul key={index}>
                            <div>
                                <div style={{color:"red" , cursor:"pointer"}} onClick={() => handleData(val.id)}>
                                    {val.ous}
                                </div>
                               { ousOpen === val.id && <div style={{color:"green"}}>
                                    {val.ans}
                                </div>}
                            </div>
                        </ul>

                        ))
                    }
                </div>

        </div>
    )
}

export default OusAns;