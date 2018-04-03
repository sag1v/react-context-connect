# react-context-connect
A connector for the react context API

## Install
```
npm install react-context-connect
```

## Usage
```
import React from "react";
import { render } from "react-dom";
import connectcontext from 'react-context-connect';

const resourceContext = React.createContext(); // creating a context

const Greetings = ({ resource, name }) => (
  <div>{`${resource.Hello} ${name} :)`}</div>
);

const mapContextToProps = data => ({
  resource: data
});

const ConnectedGreetings = connectContext(
  resourceContext.Consumer,
  mapContextToProps
)(Greetings);

const BlackBox = props => {
  return (
    <div>
      <h3>I'm A Black Box</h3>
      <ConnectedGreetings name="John" />
    </div>
  );
};

class App extends React.Component {
  state = {
    lang: "en",
    resources: {
      en: {
        Hello: "Hello"
      },
      sp: {
        Hello: "Hola"
      }
    }
  };
  setLang = ({ target }) => this.setState({ lang: target.value });
  render() {
    const { resources, lang } = this.state;
    return (
      <div>
        <select onChange={this.setLang}>
          <option value="en">English</option>
          <option value="sp">Spanish</option>
        </select>
        <resourceContext.Provider value={resources[lang]}>
          <BlackBox />
        </resourceContext.Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

```

### Live Demo
[PlayGround](https://codesandbox.io/s/218kr16ryj)