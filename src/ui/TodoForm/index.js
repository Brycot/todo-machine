import React from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router-dom";
function TodoForm(props) {
    const navigate = useNavigate();
    const [newTodoValue, setnewTodoValue] = React.useState(
        props.defaultTodoText || ""
    );
    const [isError, setIsRrror] = React.useState(false);
    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    };

    const onCancel = () => {
        navigate("/");
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue === "") {
            setIsRrror(true);
            return;
        }
        props.submitTodo(newTodoValue);
        navigate("/");
    };

    const onKeyUp = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            props.submitTodo(newTodoValue);
            onCancel();
        }
    };

    return (
        <div className="todoForm-container">
            <form onSubmit={onSubmit} onKeyPress={onKeyUp} className={isError && 'formError'}>
                <label>{props.label}</label>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder={
                        isError
                            ? "Ingresa un texto"
                            : "Cortar la cebolla para el almuerzo"
                    }
                    className={isError && 'textAreaError'}
                />
                <div className="TodoForm-buttonContainer">
                    <button
                        className={isError ? `TodoForm-button TodoForm-button-add--error` : `TodoForm-button TodoForm-button-add`}
                        type="submit"
                    >
                        {props.submitText}
                    </button>

                    <button
                        className="TodoForm-button TodoForm-button-cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
