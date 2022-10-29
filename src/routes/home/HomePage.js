import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTodos } from "../useTodos";
import TodoCounter from "../../ui/TodoCounter";
import TodoSearch from "../../ui/TodoSearch";
import TodoList from "../../ui/TodoList";
import TodoItem from "../../ui/TodoItem";
import CreateTodoButtom from "../../ui/CreateTodoButtom";

import TodosLoading from "../../ui/TodosLoading";
import EmptyTodos from "../../ui/EmptyTodos";
import TodoHeader from "../../ui/TodoHeader";
import TodosError from "../../ui/TodosError";
import EmptySearchTodos from "../../ui/EmpySearchTodos";
import ChangeAlert from "../../ui/ChangedAlert";
import ButtonFilter from "../../ui/ButtonFilter";

function HomePage() {
    const navigate = useNavigate();
    const {
        error,
        loading,
        searchedTodos,
        toggleTodo,
        deleteTodo,
        totalTodos,
        totalCompletedTodos,
        searchValue,
        setSearchValue,
        sincronizeTodos,
        completedTodos,
        unCompletedTodos,
        todounCompleted,
        todoCompleted,
        setTodoCompleted,
        setTodoUnCompleted,
        filterTodo,
    } = useTodos();
    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={totalCompletedTodos}
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
                onError={() => <TodosError />}
                onLoading={() =>
                    new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)
                }
                onEmptyTodos={() => <EmptyTodos />}
                searchValue={searchValue}
                onEmptySearchTodos={(searchValue) => (
                    <EmptySearchTodos searchValue={searchValue} />
                )}
            >
                <ButtonFilter
                    type="Todos"
                    typeFilter={completedTodos}
                    filterTodo={{ setTodoCompleted, setTodoUnCompleted }}
                    completed={false}
                    unCompleted={false}
                />
                <ButtonFilter
                    type="Completados"
                    typeFilter={completedTodos}
                    filterTodo={{ setTodoCompleted, setTodoUnCompleted }}
                    completed={true}
                    unCompleted={false}
                />
                <ButtonFilter
                    type="Sin Completar"
                    typeFilter={unCompletedTodos}
                    filterTodo={{ setTodoCompleted, setTodoUnCompleted }}
                    completed={false}
                    unCompleted={true}
                />
                {!todounCompleted &&
                    !todoCompleted &&
                    searchedTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onEdit={() => {
                                navigate(`/edit/${todo.id}`, {
                                    state: { todo },
                                });
                            }}
                            onComplete={() => toggleTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    ))}
                {todoCompleted &&
                    completedTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onEdit={() => {
                                navigate(`/edit/${todo.id}`, {
                                    state: { todo },
                                });
                            }}
                            onComplete={() => toggleTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    ))}
                {todounCompleted &&
                    unCompletedTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            onEdit={() => {
                                navigate(`/edit/${todo.id}`, {
                                    state: { todo },
                                });
                            }}
                            onComplete={() => toggleTodo(todo.id)}
                            onDelete={() => deleteTodo(todo.id)}
                        />
                    ))}
            </TodoList>
            <CreateTodoButtom onClick={() => navigate("/new")} />
            <Outlet />
            <ChangeAlert sincronize={sincronizeTodos} />
        </React.Fragment>
    );
}
export default HomePage;
