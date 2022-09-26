import React from 'react';
import { HiCheck } from "react-icons/hi";

function CompleteIcon(props) {
  return (
    <span 
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
        >
            <HiCheck />
    </span>
  )
}

export default CompleteIcon