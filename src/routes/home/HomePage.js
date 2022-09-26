import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos"
import TodoCounter from "../../ui/TodoCounter";
import TodoSearch from "../../ui/TodoSearch";
import TodoList from "../../ui/TodoList";
import TodoItem from "../../ui/TodoItem";
import CreateTodoButtom from "../../ui/CreateTodoButtom";
import Modal from "../../ui/modal";

import TodosLoading from "../../ui/TodosLoading";
import EmptyTodos from "../../ui/EmptyTodos";
import TodoHeader from "../../ui/TodoHeader";
import TodosError from "../../ui/TodosError";
import EmptySearchTodos from "../../ui/EmpySearchTodos";
import ChangeAlert from "../../ui/ChangedAlert";

function HomePage() {
  const navigate = useNavigate();
  const {
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    // addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                totalTodos = {totalTodos}
                completedTodos = {completedTodos}
            />    
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                // loading={loading}
            />
        </TodoHeader>

        <TodoList
          totalTodos={totalTodos}
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          onError={() => <TodosError/>}
          onLoading={() => (
            new Array(5)
              .fill(1)
              .map((a, i) => <TodosLoading key={i}/>)
          )}
          onEmptyTodos={() => <EmptyTodos/>}
          searchValue={searchValue}
          onEmptySearchTodos={(searchValue) => <EmptySearchTodos searchValue={searchValue}/>}
        >
            {searchedTodos.map(todo =>(
                <TodoItem 
                    key={todo.id} 
                    text={todo.text}
                    completed={todo.completed}
                    onEdit={() => {
                      navigate(
                        `/edit/${todo.id}`,
                        {
                          state: { todo }
                        }
                      );
                    }}
                    onComplete={() => toggleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
            />))}
        </TodoList>
{/* 
        {!!openModal && (
            <Modal> 
                <TodoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )} */}
        <CreateTodoButtom
          onClick={() => navigate('/new')}
            // setOpenModal={setOpenModal}
        />      

        <ChangeAlert 
          sincronize={sincronizeTodos}
        />
    </React.Fragment>
  );
};
export default HomePage;