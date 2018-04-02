/**
 * An high-order function to map and pass the context data as a regular props down to it's child.
 * @param {The relevant context consumer instance} ContextConsumber 
 * @param {* A function to map the context data into props object} mapContextToProps 
 */
var connectContext = function connectContext(ContextConsumber) {
    var mapContextToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (data) {
        return data;
    };
    return function (Child) {
        return function (props) {
            return React.createElement(
                ContextConsumber,
                null,
                function (data) {
                    return React.createElement(Child, Object.assign({}, mapContextToProps(data), props));
                }
            );
        };
    };
};

export default connectContext;