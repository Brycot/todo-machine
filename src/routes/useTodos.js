import React from "react";
import useLocalStorage from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V2", []);

    const [searchValue, setSearchValue] = React.useState("");
    const [todoCompleted, setTodoCompleted] = React.useState(false);
    const [todounCompleted, setTodoUnCompleted] = React.useState(false);

    // Filtros para saber los todos completados o incompletos
    const totalCompletedTodos = todos.filter((todo) => !!todo.completed).length;
    const completedTodos = todos.filter((todo) => todo.completed === true);
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);

    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    const filterTodo = (filter) => {
        searchedTodos = filter;
    }
    const addTodo = (text) => {
        const id = newTodoId(todos);
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
            id,
        });
        saveTodos(newTodos);
    };

    const getTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        return todos[todoIndex];
    };

    const toggleTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toggleTodo,
        editTodo,
        deleteTodo,
        sincronizeTodos,
        getTodo,
        totalCompletedTodos,
        unCompletedTodos,
        filterTodo,
        todoCompleted,
        todounCompleted,
        setTodoCompleted,
        setTodoUnCompleted
    };
}

function newTodoId(todoList) {
    if (!todoList.length) {
        return 1;
    }
    const idList = todoList.map((todo) => todo.id);
    const idMax = Math.max(...idList);
    return idMax + 1;
}

export { useTodos };
