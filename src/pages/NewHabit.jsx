import React from 'react'
import axios from 'axios';
import Auth from '../components/Auth';

class NewHabit extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { name: '', description: '' }
    
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
      }
    
      async handleLogin(e) {
        e.preventDefault()
        const response = await axios.post(`http://localhost:8080/newhabit`, {
          name: this.state.name,
          description: this.state.description,
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
            <form>
              <h1>Add New Habit</h1>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Description:
                        <input type="text" name="description"  onChange={this.handleChange}/>
                    </label>
                </div>
    
                <div>
                    <button onClick={this.handleLogin} type="submit">Create Habit</button>
                </div>
            </form>
           
        )
    }
}
export default Auth(NewHabit)