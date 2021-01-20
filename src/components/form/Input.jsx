import React, { useState } from 'react';
import './Input.css';

export default props => {
    const [valor, setValor] = useState('Inicial');

    function WhenChange (e){
        setValor(e.target.value);
    }
    return (
        <div className="Input">
                
               <label htmlFor="nome">Nome</label>
                <input  value={valor} onChange={WhenChange} />{/* precisa-se do evento onChange para mudar o estado do input */}
                
            
        </div>
    )
}