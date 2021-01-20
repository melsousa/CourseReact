import './Mega.css';
import React, { useState, Component } from 'react';
import FormQuant from './FormQuant';
import MegaSena from './MegaSena';

export default props => {
    //para não repetir números
    function NumberNoContained(min, max, array) { //gerar numeros não contidos no array
        const radom = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(radom) ? //quando um número aleatorio não estiver contido no array
            NumberNoContained(min, max, array) : //se o número estiver contido no array, chama novamente a função
            radom
    }

    function GenerateNumber(quant) {
        const numeros = Array(quant)

            .fill(0) //preenchendo o array
            .reduce((acum) => {
                const newNumber = NumberNoContained(1, 60, acum)
                return [...acum, newNumber]
            }, []) //gerando outro array
            .sort((n1, n2) => n1 - n2) //ordenando o array
        return numeros;
    }


    const [quant, setQuant] = useState(props.quant || 6); //se não for passado quantidade, o padrão é 6
    const arrayInicial = GenerateNumber(quant);
    const [numeros, setNumeros] = useState(arrayInicial); //mudando o estado do array


    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3> {/*separando os numeros por espaço */}
            <div>
                <label htmlFor="InputQuant">Quantidade de números</label>
                <input  min="6" max="18" type="number" value={quant}
                    onChange={(e) => {
                        setQuant(+e.target.value)
                        setNumeros(GenerateNumber(+e.target.value))
                    }} />
            </div>
            <button onClick={(_) => setNumeros(GenerateNumber(quant))}> {/*chamando a função gerar números e passando a quantidade */}
                Gerar Números
            </button>
        </div>
    )
}
// //minha solução que só gerou um número
// class Mega extends Component {
//     state ={
//         quantidade: this.props.quantidadeNumero || 5,
//     };

//     setQuantidade = (novaQuantidade) =>{
//         this.setState({
//             quantidade:novaQuantidade,
//         });
//     }



//     render(){
//         return(
//             <div>
//                 <MegaSena min={1} max={60}></MegaSena>
//                 <FormQuant quantidade={this.state.quantidade} setQuantidade={this.setQuantidade}></FormQuant>
//                  {/* <Buttons quantidade={this.quantidade}></Buttons> */}
//             </div>
//         )

//     }



// }

// export default Mega;
