import React from 'react';

import alunos from '../../data/alunos'; //export de array de alunos 

export default props => {
    const alunosLis = alunos.map(aluno =>{ //pegando o export alunos[que é um array], 
         return(                      //passando pro argumento aluno os valores que contem no array
            <li key={aluno.id}> {/*é interessante usar o atributo key para facilitar o react de fazer certas mudanças*/}
                {aluno.id} º {aluno.nome} {'->'} {aluno.nota}
            </li>
         );                           

    });
    return (
        <div>
            <ul style={{listStyle:'none'}}> {/* vai tirar o estilo de lista */}
                {alunosLis}
            </ul>
        </div>
    )
}