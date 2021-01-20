import React from 'react';

import DirectSon from './DirectSon';

export default props => {
    return (
        <div>
            <DirectSon nome="Junior" idade={15} nerd={true}></DirectSon>
            <DirectSon nome="Felipe" idade={20} nerd={true}></DirectSon>
            <DirectSon nome="Mel" idade={18} nerd={false}></DirectSon>
        </div>
    )
}