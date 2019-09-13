import React from 'react'
import axios from 'axios';
import Auth from '../components/Auth';

class NewHabit extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { name: '', description: '', }
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    
    async handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:8080/newhabit`,  
        {
            name: this.state.name,
            description: this.state.description,
        },
        {
            headers: { authorization: window.localStorage.getItem('auth'), } },
        )
        let path = '/dashboard'
        this.props.history.push(path)
    }


      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
    
     
    
  
    render() {
        return (
            <form>
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
                    <button onClick={this.handleSubmit} type="submit">Create Habit</button>
                </div>
            </form>
           
        )
    }
}

export default Auth(NewHabit)