import React from "react";
import useStorageListener from "./useStorageListener";

function ChangeAlert({ sincronize }) {
    const {
        show, 
        toggleShow
        } = useStorageListener(sincronize);
    if(show) {
        console.log('dwdwd');
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={() => toggleShow()}>Volver a cargar la información</button>
            </div>
        )
    } else {
        return null;
    }
}

export default ChangeAlert;