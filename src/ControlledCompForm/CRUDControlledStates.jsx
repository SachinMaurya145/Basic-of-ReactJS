import React, { useState } from 'react'

function CRUDControlledStates() {

    const[userName, setUserName]= useState("");
    const[password, setPassword]= useState("");


    const handleLogin=()=>{
        console.log(" ALL DA TA ",  userName , password);
    }

    return (
        <div>
            <h3> This is a React CRUD - Controlled - with States -- short data  </h3>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
                <input type="text"  autoComplete="off"  onChange={(e)=>{setUserName(e.target.value)}} name=''  value={userName}/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name=''  value={password}/>

                <button style={{marginTop: '20px' }} onClick={handleLogin}> login Data </button>
            </div>
        </div>
    )
}

export default CRUDControlledStates