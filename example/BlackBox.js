import React from 'react';
import ConnectedGreetings from './ConnectedGreetings';

const BlackBox = () => {
    return (
        <div>
            <h3>I'm A Black Box</h3>
            <ConnectedGreetings name="John" />
        </div>
    );
};

export default BlackBox;