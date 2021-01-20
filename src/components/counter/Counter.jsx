import React, { Component } from 'react';

import './Counter.css';

class Counter extends Component {

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

    ChangeStep = (novoPasso) => {
        this.setState({
            passo: +novoPasso.target.value, //passando o que o usuário digitar, para fazer a modificação
                                            //o + e o target.value converte isso para um valor inteiro
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>  Contador </h2>
                <p>Valor Inicial: {this.state.numero} </p> {/*apontando para a instância(propriedade) dessa classe */}

                <div className="PassoInput">
                    <label htmlFor="passoIput">Passo : </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.ChangeStep} />
                </div>

                <button onClick={this.Increment}>+</button> {/*Aqui this não está passando a instância atual*/}
                <button onClick={this.Decrement}>-</button> {/*Aqui this não está passando a instância atual*/}
            </div>
        )
    }
}

export default Counter;