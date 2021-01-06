import './App.css';

import React from 'react';

import First from './components/basic/First'; //não precisa ser o mesmo nome
import WithParameter from './components/basic/WithParamater';
import Fragment from './components/basic/Fragment';
import Radom from './components/basic/Radom';
import Card from './components/layout/Card';
import Family from './components/basic/Family';
import MemberFamily from './components/basic/MemberFamily';
import ListStudent from './components/repeat/ListStudent';
import ProductTable from './components/repeat/ProductTable';
import EvenOrOdd from './components/condiction/EvenOrOdd';
import UserInfo from './components/condiction/UserInfo';

export default () => (//posso tirar os parenteses do parametro porque é só um ou 
  //passar um _ que indica que um parametro mas que eu não vou usar
  //se tirar as chaves da função tira o return() também
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo=" #08 - Par ou ímpar" color="#F76835">
        <EvenOrOdd numero={20}></EvenOrOdd>
      </Card>
      <Card titulo=" #07 - Produtos da tabela" color="#293E6A">
        <ProductTable></ProductTable>
      </Card>

      <Card titulo=" #06 - Lista de alunos" color="#9B539C">
        <ListStudent></ListStudent>
      </Card>

      <Card titulo=" #05 - Componente com filhos" color="#85C4B9">
        <Family sobrenome="ferreira">
          <MemberFamily nome="melissa" />
          <MemberFamily nome="mel" />
          <MemberFamily nome="m" sobrenome="Silva" />
        </Family>
      </Card>

      <Card titulo=" #04 - Desafio Aleatório" color="#FA6900">
        <Radom max={60} min={1} />
      </Card>


      <Card titulo=" #03 - Fragmento" color="#E94C6F">
        <Fragment />
      </Card>

      <Card titulo=" #02 - Situação do aluno" color="#28ABE3">
        <WithParameter titulo="Situação do aluno"
          aluno="melissa" nota={6.0} />

      </Card>

      <Card titulo=" #01 - Primeiro Componente" color="#8C4646">
        <First />
      </Card>

    </div>

  </div>
)