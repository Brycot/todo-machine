import './ButtonFilter.css'

function ButtonFilter({ type, filterTodo, completed, unCompleted }) {
    const {setTodoCompleted, setTodoUnCompleted} = filterTodo
    const handleFilter = () => {
        setTodoCompleted(completed)
        setTodoUnCompleted(unCompleted)
    };
    return <button className='buttonFilter' onClick={() => handleFilter()}>{type}</button>;
}

export default ButtonFilter;
