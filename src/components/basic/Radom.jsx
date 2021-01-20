import React from 'react';

export default (numero) => {

    const { min, max } = numero; //destruct

    const radom = parseInt(Math.random() * (max - min)) + min;
    // const radom =  Math.floor(Math.random() * (max + 1) + min); // essa acrescenta mais 1 ao valor máximo
    return (
        <div>
            <h2>Valor Aleátorio</h2>
            <p><strong>Valor mínimo: </strong>{min}</p>
            <p><strong>Valor máximo: </strong>{max}</p>

            <h2>Valor sorteado :<strong>{radom}</strong></h2>

        </div>


    )

}

