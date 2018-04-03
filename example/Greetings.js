import React from 'react';
import PropTypes from 'prop-types';

const Greetings = ({ resource, name }) => (
    <div>{`${resource.Hello} ${name}`}</div>
);

Greetings.propTypes = {
    resource: PropTypes.object,
    name: PropTypes.string
};

export default Greetings;