import React from 'react'
import axios from 'axios';

export default class Login extends React.Component {
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
          .post('http://localhost:8080/login', this.state)
          .then(res => {
              console.log(res);
              console.log(res.data);
          })
          .catch(error => {
              console.log("Error with login information")
          });
          
          
  };

  render() {
      const { userName, password } = this.state
      return (
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
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
                  <button type="submit">Login</button>
              </div>
              <div>
                  <a href="/register">Don't have an account? Register</a>
              </div>
          </form>
         
      )
  }
}