import React from 'react';

/** A connect HOF for react-context */
const connectContext = (
    ContextConsumber,
    mapContextToProps = data => data
) => Child => props => (
    <ContextConsumber>
        {data => <Child {...mapContextToProps(data)} {...props} />}
    </ContextConsumber>
);

export default connectContext;