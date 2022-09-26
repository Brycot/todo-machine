import React from 'react';
import { HiPencil } from "react-icons/hi";
import './EditIcon.css';

function EditIcon(props) {
  return (
    <span 
            className={`Icon Icon-edit ${props.completed && 'Icon-edit--active'}`}
            onClick={props.onEdit}
        >
            <HiPencil />
    </span>
  )
}

export default EditIcon