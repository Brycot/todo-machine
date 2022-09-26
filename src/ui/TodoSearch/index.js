import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    
    const onSearchValueChange = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue);
        setSearchValue(inputValue);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar TODO"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export default TodoSearch;