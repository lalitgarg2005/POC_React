import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//user-defined component
//When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. We call this object “props”.


function Welcome(props){
    return <h1> Hello {props.name}</h1>
}
const element = <Welcome name="Kumar" />
ReactDOM.render(element, document.getElementById('root'));


/*
Let’s recap what happens in this example:

We call ReactDOM.render() with the <Welcome name="Sara" /> element.
React calls the Welcome component with {name: 'Sara'} as the props.
Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
*/
