import React from 'react';
import ReactDOM from 'react-dom';


function showName(user){
    if(user)
        return 'Garg'
        else
        return 'Stranger' 
}

function formatName(user){
    return user.firstName + ' ' + user.LastName
}

const user = {
    firstName: 'Lalit',
    LastName: 'K Garg'
}

const name = 'Lalit'

const element = <h1> Hello {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
