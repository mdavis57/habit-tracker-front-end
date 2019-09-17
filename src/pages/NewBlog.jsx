import React from 'react'
import axios from 'axios';
import Auth from '../components/Auth';
import { Button } from '@material-ui/core'

class NewBlog extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = { name: '', content: '', }
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    
    async handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:8080/newblog`,  
        {
            name: this.state.name,
            content: this.state.content,
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
                <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Create new blog post</h1>
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <label>
                        Name:
                        <input type="text" name="name"  onChange={this.handleChange}/>
                    </label>
                </div>
                <div style={{display: 'flex', justifyContent:'center', height: '11vh'}}>
                    <label>
                        Content:
                        <textarea rows="4" cols="50" name= 'content' onChange={this.handleChange}></textarea>
                    </label>
                </div>
    
                <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
                    <Button variant="primary" onClick={this.handleSubmit} type="submit">Create New Post</Button>
                </div>
            </form>
           
        )
    }
}

export default Auth(NewBlog)