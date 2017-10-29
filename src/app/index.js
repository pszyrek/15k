import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

const logo = require('./img/webpack.png');

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>DUPA</h1>
                <p>DUPA</p>
                <p>DUPA</p>
                <img src={logo} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));