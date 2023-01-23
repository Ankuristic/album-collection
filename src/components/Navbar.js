import React from 'react';
import { Link } from 'react-router-dom'
import { GrAdd } from "react-icons/gr";


//get button name and path for evaery component
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <span className='albums-collection'>MY-ALBUMS</span>
      </h2>
      <Link to={props.path}><button>{props.page}<GrAdd/></button></Link>
    </div>
  )
}

export default Navbar