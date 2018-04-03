'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            return _react2.default.createElement(
                ContextConsumber,
                null,
                function (data) {
                    return _react2.default.createElement(Child, Object.assign({}, mapContextToProps(data), props));
                }
            );
        };
    };
};

exports.default = connectContext;