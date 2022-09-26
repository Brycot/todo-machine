import React from 'react';
import { HiTrash } from "react-icons/hi";
import './DeleteIcon.css';

function DeleteIcon(props) {
  return (
    <span 
            className={`Icon Icon-delete ${props.completed && 'Icon-delete--active'}`}
            onClick={props.onDelete}
        >
            <HiTrash />
    </span>
  )
}

export default DeleteIcon