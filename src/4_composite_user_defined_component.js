import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome(props){
    return <h1> Hello {props.name}</h1>
}

function AppName(){
    return (
        <div>
            <Welcome name='Gopal'/>
            <Welcome name='Raj'/>
            <Welcome name='Pawan'/>

        </div>
    )
}
ReactDOM.render(<AppName />, document.getElementById('root'));

