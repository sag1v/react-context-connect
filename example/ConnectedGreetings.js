import React from 'react';
import connectContext from '../src/connectContext';
import resourceContext from './resourceContext';
import Greetings from './Greetings';

const mapContextToProps = data => ({
    resource: data
});

const ConnectedGreetings = connectContext(
    resourceContext.Consumer,
    mapContextToProps
)(Greetings);

export default ConnectedGreetings;
