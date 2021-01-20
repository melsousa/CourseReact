import React, { useState } from 'react'; //componente useState vai retornar um array
import IndirectSon from './IndirectSon';

export default props => {  // a 1} posição vai retornar o valor e a 2º posição vai ser uma função para operar esse valor
    const [nome, setNome] = useState('?'),
        [idade, setIdade] = useState(0),
        [nerd, setNerd] = useState(false);
        

    //nome idade nerd 
    function fornecerInfo(nome, idade, nerd) {
       setNome(nome);
       setIdade(idade);
       setNerd(nerd);
    }

    return (
        <div>
            <div>
                <span> {nome} </span>
                <span> {idade} </span>
                <span> {nerd ? 'Verdadeiro' : 'False'} </span>
            </div>
            <IndirectSon quandoClicar={fornecerInfo}></IndirectSon>
        </div>
    )
}