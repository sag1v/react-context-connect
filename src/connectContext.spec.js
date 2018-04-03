import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import connectContext from './connectContext';
//import Adapter from 'enzyme-adapter-react-16';
import Adapter from '../utils/ReactSixteenAdapter'; // a temporary fix due to https://github.com/airbnb/enzyme/issues/1509#issuecomment-377726374

configure({ adapter: new Adapter() });

const { Provider, Consumer } = React.createContext();
const printMessage = (message) => `${message.from}: ${message.body}`;
const messageObj = { from: 'John', body: 'Hi there!' };
const someProp = 'some new prop';
class Message extends React.Component {
    render() {
        const { message, someProp = '' } = this.props;
        return (<div className="message">{` ${printMessage(message)} ${someProp}`}</div>)
    }
};
const mapContextToProps = data => ({ message: data });
const ConnectedMessage = connectContext(Consumer, mapContextToProps)(Message);

const WithProvider = () => (
    <Provider value={{ ...messageObj }}>
        <ConnectedMessage someProp={someProp} />
    </Provider>
);

describe('Testing connectContext', () => {
    const wrapper = mount(<WithProvider />);
    const childRendredData = wrapper.getDOMNode().innerHTML;
    console.log('-- The wrapper ---- ', childRendredData);
    test('passing context as props (mapContextToProps)', () => {
        expect(childRendredData).toContain(printMessage(messageObj));
    });
    test('passing through the props', () => {
        expect(childRendredData).toContain(someProp);
    });
});