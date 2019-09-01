import React from 'react'
import UserInput from '../Components/UserInput'
import axios from 'axios';



export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        
        event.preventDefault();
        axios
            .post('http://localhost:8080/signup', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log("Error with registration information")
            });
            
    };

    render() {
        const { userName, password } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="userName" name="userName" value={userName}  onChange={this.handleChange}/>
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

//export default () => {
 // return (
 //   <div>
 //     <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Register</h1>
  //    <div style={{display: 'flex', justifyContent:'center', height: '100vh'}}>
  //      <UserInput />
  //    </div>
  //  </div>
 // )
//}
