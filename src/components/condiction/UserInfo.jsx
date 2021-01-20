import React from 'react';
import If, { Else } from './If'; //else esta sendo passado como componente de if

export default props => {
    const usuario = props.usuario || {};
    return (
        <div>

            {/* exemplo com else */}
            <If test={usuario && usuario.nome}>{/* se tive usuario e o nome dele  */}
                <p>Seja bem vindo <strong>{usuario.nome} </strong> !</p> {/* usuario é a propriedade passada la no App */}
                <Else>
                    <p>Seja bem vindo <strong>Gatinho </strong> !</p> 
                </Else>
            </If>
        </div>
    );
};