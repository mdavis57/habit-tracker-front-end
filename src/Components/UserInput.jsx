import React from 'react';
import axios from 'axios';



export default class UserInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        
        event.preventDefault();
        axios
            .post('http://localhost:8080/user/signup', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log("Error with registration information")
            });
            
    };

    render() {
        const { email, username, password } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <input type="username" name="username" value={username}  onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    </label>
                </div>
    
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
           
        )
    }
}