import React from 'react';

import Product from '../../data/product';
import './ProductTable.css';

export default props => {
    const ListProduct = Product.map((product, i) => {
        return (

            <tr key={product.id} className={i % 2 === 0 ? 'Par' : ''}>{/* Par é o nome da classe la em css*/}

                <td> {product.id} </td>
                <td>{product.nome} </td>
                <td> R$ {product.preco.toFixed(2)} </td> {/*deixa só com duas casas decimais */}
            </tr>
        )
    })
    return (
        <div>
            <table className="ProductTable">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Nome do Produto</th>
                        <th>Preço do produto</th>
                    </tr>
                </thead>

                <tbody>

                    {ListProduct}

                </tbody>


            </table>
        </div>
    )
}