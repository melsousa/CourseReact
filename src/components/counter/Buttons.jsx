import React from 'react';
import './CounterDeconstructor.css';
export default props =>{
    return(
        <div>
             <button onClick={props.Increment}>+</button> {/*Aqui this não está passando a instância atual*/}
                <button onClick={props.Decrement}>-</button> {/*Aqui this não está passando a instância atual*/}
        </div>
    )
}