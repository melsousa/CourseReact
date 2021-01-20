//function que vai receber a quant de números para gerar
// retornar um array com números aleatorios, sem repetir e na ordem crescente
//usar o metodo de gerar números dentro de um for e ir pasando para o array
//botão que ao clicar vai gerar números 
//um campo que vai receber a quantidade de números para sortear
import './Mega';

//minha solução que só gera um número
export default props => {
    var MyArray = [props]; //array quantidade


    const { min, max } = props; //min e max para sortear



    for (let i = 0; i < MyArray.length; i++) {
        const radom = parseInt(Math.random() * (max - min)) + min;
        MyArray[i] = radom; //passando valores para meu array

    }

    return MyArray;



}

