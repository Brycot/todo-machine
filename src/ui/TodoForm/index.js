import React from 'react'
import './TodoForm.css'
import { useNavigate } from 'react-router-dom'
function TodoForm(props) {
    const navigate = useNavigate();
    const [newTodoValue, setnewTodoValue] = React.useState(props.defaultTodoText || '');
    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    }

    const onCancel = () => {
        navigate('/');
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue === '') {
            return;
        }
        props.submitTodo(newTodoValue);
        navigate('/');
    }

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            props.submitTodo(newTodoValue);
            onCancel();
        }
    };


    return (
        <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className='TodoForm-buttonContainer'>
                
                <button
                    className='TodoForm-button TodoForm-button-add'
                    type="submit"
                >
                    {props.submitText}
                </button>

                <button
                    className='TodoForm-button TodoForm-button-cancel'
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}

export default TodoForm;