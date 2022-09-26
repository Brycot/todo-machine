import './EmptyTodos.css'

function EmptySearchTodos({ searchValue }) {
    return (
        <div className="EmptyTodo">
            <h2 className="EmptyTodo__Title">No se encontro {searchValue}</h2>
            <h4 className="EmptyTodo__SubTitle">pulsa el botón + para crearlo</h4>
        </div>
    )
}

export default EmptySearchTodos;