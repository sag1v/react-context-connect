import React from 'react';
import resourceContext from './resourceContext';
import BlackBox from './BlackBox';

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

export default App;