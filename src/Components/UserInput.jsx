import React from 'react';
import axios from 'axios';


export default class UserInput extends React.Component {
    state = {
        name: '',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = event => {
        
        event.preventDefault();

        const user = {
            name: this.state.name,
        };
        
        axios
            .post('https://localhost:8080/user/new', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add</button>
            </form>
           
        )
    }
}