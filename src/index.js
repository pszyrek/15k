import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';


class App extends React.Component {
    render() {
        return (
            <div>
                <button class="btn btn-primary"> test</button>
                <h1>DUPA</h1>
                <p>DUPA</p>
                <p>DUPA</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));