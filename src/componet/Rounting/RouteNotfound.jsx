import React from 'react'; 
import { Link } from 'react-router-dom';

function RouteNotfound() {
    
  return (
    <div>
        NO data found  here <br /> 
        <Link to="/">GO TO HEOME </Link>
    </div>
  )
}

export default RouteNotfound