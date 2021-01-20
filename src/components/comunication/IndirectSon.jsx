import React from 'react';
import './IndirectSon.css';

export default props => {
    const cb = props.quandoClicar
    const min = 0
    const max = 18
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div className="IndirectSon">
            <p>Filho</p>
            <button onClick={_ => cb('Mel', gerarIdade(), gerarNerd())}> {/* arrow function, _ não está usando argumento */}
                Fornecer Informações
            </button>
        </div>
    )
}