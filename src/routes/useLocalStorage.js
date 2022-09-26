import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
    const {         
    sincronized,
    error,
    loading,
    item,
    } = state

    // ACTION CREATORS
    const onError = (error) => dispatch({type: actionTypes.error, payload: error});
    const onSucces = (item) => dispatch({type: actionTypes.succes, payload: item});
    const onSave = (item) => dispatch({type: actionTypes.save, payload: item});
    const onSincronize = () => dispatch({ type: actionTypes.sincronize });

    React.useEffect(() => {
    setTimeout(() => {
    try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
        } else {
        parsedItem = JSON.parse(localStorageItem);
        }
        onSucces(parsedItem);
    } catch(error) {
        onError(error);
    }
    }, 1000);
    }, [sincronized]);


    const saveItem = (newItem) => {
    try {
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem);
        onSave(newItem);
    } catch (error) {
        onError(error);
    }
    };

    const sincronizeItem = () => {
        onSincronize();
    }

    return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
    };
}

const initialState = ({ initialValue }) => ({
    sincronized: true,
    error: true,
    loading: true,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    succes: 'SUCCES',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.succes]: {
        ...state,
        error: false,
        loading: false,
        sincronized: true,
        item: payload,
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    },
    [actionTypes.sincronize]: {
        ...state,
        sincronized: false,
        loading: true,
    },
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

export default useLocalStorage;