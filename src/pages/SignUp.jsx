import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core'



export default class User extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        userName: '',
        password: '',
      }
  
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
  
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post(`http://localhost:8080/signup`, {
        userName: this.state.userName,
        password: this.state.password,
      })
      let path = '/login'
      this.props.history.push(path)
    }
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <form>
                <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Register</h1>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label >
                        Username:
                        <input type="text" name="userName"   onChange={this.handleChange}/>
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label>
                        Password:
                        <input type="password" name="password"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label>
                        Verify Password:
                        <input type="password" name="password"  onChange={this.handleChange}/>
                    </label>
                </div>
        
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <Button variant="primary" onClick={this.handleSubmit} type="submit">Register</Button>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <a href="/login">Already have an account? Login</a>
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
