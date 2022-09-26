import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <div className="EmptyTodo">
            <h2 className="EmptyTodo__Title">Oh, aun no has creado TODOs</h2>
            <h4 className="EmptyTodo__SubTitle">pulsa el botón + para crear</h4>
        </div>
    )
}

export default EmptyTodos;