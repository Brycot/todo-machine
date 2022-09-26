import './TodoList.css'

function TodoList(props) {
    return (
        <section className='TodoList-Container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchTodos(props.searchValue)}
            <ul>
                {(!props.loading && !props.error) && props.children}
            </ul>
        </section>
    );
}
export default TodoList