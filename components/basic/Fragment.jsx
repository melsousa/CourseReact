import React from 'react';

export default function Fragment(){
    return(
        //quando não quiser envolver com uma div ou <> </>
        <React.Fragment> 
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro</p>
        </React.Fragment>   
    )
}