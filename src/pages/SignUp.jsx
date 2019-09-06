import React from 'react'
import axios from 'axios';



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
                <h1>Register</h1>
                <div>
                    <label>
                        Username:
                        <input type="text" name="userName"   onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Verify Password:
                        <input type="password" name="password"  onChange={this.handleChange}/>
                    </label>
                </div>
        
                <div>
                    <button onClick={this.handleSubmit} type="submit">Register</button>
                </div>
                <div>
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
