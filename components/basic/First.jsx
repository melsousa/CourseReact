import React from 'react'

export default function First(){ //exportando por padrão o componente
    const msg = 'seja bem vindo (a)!'
    return(
        
        <div>
            <h2>Primeiro componente</h2>
            <p>{msg}</p>
        </div>
    )
    
}