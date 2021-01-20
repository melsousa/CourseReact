import React from 'react';

export default props =>{
    return(
        <div>
            <label htmlFor="QuantInput">Quantidade: </label>
            <input type="number" id="QuantInput" value={props.passo} onChange={e => props.setQuantidade(+e.target.value)}/>
        </div>
    )
}