import React, { cloneElement } from 'react';


export default props => {
    return (
        <div>

            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i}); //pegando o proprio elemento e mostrando as propriedades do pai
            })}

            {/* vai pegar os filhos e receber o proprio elemento */}


            {/* pegar um unico elemento */}
            {/* {cloneElement(props.children, {...props})} {/*clonar um elemento e pegar os filhos dele,
                                                         ...props pegando toda as propriedades de props*/}
        </div>
    )
}