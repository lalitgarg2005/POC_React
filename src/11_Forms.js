import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={ value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value ={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='Submit' value='Submit'/>
            </form>
        );
    }

}
ReactDOM.render(
    <NameForm />, document.getElementById('root')
);