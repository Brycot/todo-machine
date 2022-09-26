import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {

    return (
        <section className="TodoCounter_container">
            <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}
            >
                Has completado {completedTodos} de {totalTodos} TODOs
            </h2>
        </section>
    );
}

export default TodoCounter;