import { HiOutlinePlusSm } from "react-icons/hi";
import './CreateTodoButton.css';

function CreateTodoButton(props) {

  return (
    <button 
      className="CreateTodoButton"
      onClick={props.onClick}
      >
        <HiOutlinePlusSm/>
      </button>
  );
}

export default CreateTodoButton;