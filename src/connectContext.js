/**
 * An high-order function to map and pass the context data as a regular props down to it's child.
 * @param {The relevant context consumer instance} ContextConsumber 
 * @param {* A function to map the context data into props object} mapContextToProps 
 */
const connectContext = (
    ContextConsumber,
    mapContextToProps = data => data
) => Child => props => (
    <ContextConsumber>
        {data => <Child {...mapContextToProps(data)} {...props} />}
    </ContextConsumber>
);

export default connectContext;