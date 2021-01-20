import React, { Component } from 'react';
import Display from './Display';

import './CounterDeconstructor.css';
import Buttons from './Buttons';
import FormStep from './FormStep';

class CounterDeconstructor extends Component {

    //usando só o state
    state = {
        numero: this.props.numeroInicial || 0, // esse ou é caso o numero inicial não for fornecido
        passo: this.props.passoInicial || 5,
    };

    //usando construct
    // constructor(props) {
    //     super(props)

    //     this.state = { //se usar função usa-se useState
    //         numero: props.numeroInicial

    //     }
    // }

    Increment = () => { //precisa transformar em arrow function para o this pegar a instância atual
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    Decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso, //passando o que o usuário digitar, para fazer a modificação
                                            //o + e o target.value converte isso para um valor inteiro
        });
    }

    render() {
        return (
            <div className="CounterDeconstructor">
                <h2>  Contador </h2>
                <Display numero={this.state.numero}></Display>

                <FormStep passo={this.state.passo} setPasso={this.setPasso}></FormStep> {/*passando via propriedade */}

               <Buttons Increment={this.Increment} Decrement={this.Decrement}></Buttons> 
            </div>
        )
    }
}

export default CounterDeconstructor;