import React from 'react';

export default props => {
    return (
        <div className="PassoInput">

            <label htmlFor="passoIput">Passo : </label>
            <input type="number" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)} /> {/*pegando já o novo número */}
        </div>
    )


} 