import React from 'react'
import ReactDOM from 'react-dom'

class LoginButton extends React.Component{

    handleClick(){
        console.log('this is', this);
    }

    render(){
        //This syntax ensures 'this' is bound within handleClick
        return (
            <button onClick = {(e) => this.handleClick(e)}>
            CLICK ME
            </button>

        );
    }
}

ReactDOM.render(<LoginButton />, document.getElementById('root'));

/*
The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
*/

//Passing Arguments to Event Handlers
/*Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.

In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
*/