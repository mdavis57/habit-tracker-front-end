import React from 'react'
import axios from 'axios';
import Auth from '../components/Auth';
import { Button } from '@material-ui/core'



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
                <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Create new habit</h1>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label>
                        Name:
                        <input type="text" name="name"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label>
                        Description:
                        <input type="text" size='50' name="description"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                       Repeats:
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Monday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Tuesday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Wednesday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Thursday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Friday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Saturday
                        <input type="checkbox" />
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <label>
                        Sunday
                        <input type="checkbox" />
                    </label>
                </div>   
                
                <div style={{display: 'flex', justifyContent:'center', height: '3vh'}}>
                    <Button variant="primary" onClick={this.handleSubmit} type="submit">Create Habit</Button>
                </div>
            </form>
           
        )
    }
}

export default Auth(NewHabit)


//  <textarea rows="4" cols="50" name= 'description' onChange={this.handleChange}></textarea>