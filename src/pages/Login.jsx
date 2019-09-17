import React from 'react'
import axios from 'axios'


export default class Login extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = { userName: '', password: '' }
  
      this.handleChange = this.handleChange.bind(this)
      this.handleLogin = this.handleLogin.bind(this)
    }
  
    async handleLogin(e) {
      e.preventDefault()
      const response = await axios.post(`http://localhost:8080/login`, {
        userName: this.state.userName,
        password: this.state.password,
      })
      window.localStorage.setItem('auth', response.headers.authorization)
      let path = '/dashboard'
      this.props.history.push(path)
    }
  
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
  

  render() {
      return (
          <form >
            <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Login</h1>
              <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                  <label>
                      Username:
                      <input type="text" name="userName"  onChange={this.handleChange}/>
                  </label>
              </div>
              <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                  <label>
                      Password:
                      <input type="password" name="password"  onChange={this.handleChange}/>
                  </label>
              </div>
  
              <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                  <button onClick={this.handleLogin} type="submit">Login</button>
              </div>
              <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                  <a href="/signup">Don't have an account? Register</a>
              </div>
          </form>
         
      )
  }
}