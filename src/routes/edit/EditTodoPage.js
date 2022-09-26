import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import TodoForm from "../../ui/TodoForm";
import { useTodos } from '../useTodos';

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const id = Number(params.id)
  const { loading, getTodo, editTodo } = useTodos();

  let todoText;

  if(location.state?.todo) {
    todoText = location.state.todo.text;
  } else if(loading) {
    return <p>cargando...</p>
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitTodo={(newText) => editTodo(id, newText)}
      />
  );
}

export default EditTodoPage