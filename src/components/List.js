import React from 'react'
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";


//get album from album list and show using html css and js
const List = (props) => {
  console.log(props);
  return (
    <div className='list'>
      <h3>{props.album.title}</h3>
      <div className='button-group'>
        <Link to="/update-album"><button className="update-btn"onClick={() => props.setUpdateAlbum(props.album)}><GrUpdate/></button></Link>
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}><AiFillDelete/></button>
      </div>
    </div>
  )
}

export default List