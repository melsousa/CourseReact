export default props => {

    const elseChildren = props.children.filter(child => {
        return child.type && child.type.name === 'Else'; //se child estiver com o valor alterado(setado)
        //essa condição vai retornar um array
    })[0]                                                  //pegando os filhos do else

    const ifChildren = props.children.filter(child => {
        return child !== elseChildren; //pegando todos os elementos(filhos) que else não pegou
    })


    if (props.test) {
        return ifChildren;
    } else if (elseChildren) { //se estiver setado(alterado)
        return elseChildren;
    } else {
        return false;
    }
}

export const Else = props => props.children