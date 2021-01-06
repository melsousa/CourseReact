import "./Card.css"; 
import React from 'react';

export default (props) =>{
    
    const cardStyle = {
        backgroundColor: props.color || '#F00',
         borderColor: props.color || '#F00', //segundo argumento é o padfrao
    }
    return (
        <div className="Card" style={cardStyle}>
             <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                 {props.children} {/*filhos do component */}
            </div>
           
        </div>
    );
};