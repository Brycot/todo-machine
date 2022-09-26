import CompleteIcon from "../TodoIcon/CompleteIcon";
import DeleteIcon from "../TodoIcon/DeleteIcon/Index";
import EditIcon from "../TodoIcon/EditIcon";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <li className={`TodoItem ${props.completed && 'TodoItem--active'}`}>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />

            <p 
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>

            <EditIcon 
                completed={props.completed}
                onEdit={props.onEdit}
            >
            </EditIcon>
            
            <DeleteIcon
                completed={props.completed}
                onDelete={props.onDelete}
            >
            </DeleteIcon>
        </li>
    );
}

export default TodoItem ;