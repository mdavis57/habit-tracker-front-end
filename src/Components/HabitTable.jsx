import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core'


export default class HabitTable extends React.Component {
    constructor() {
        super()
        this.state = {
            habits: [],
            
            
            
    }
    };


    async componentDidMount() {
        const data = await axios.get('http://localhost:8080/user/id/habits', {
            headers: { authorization: window.localStorage.getItem('auth') }
        })
        this.setState({ habits : data.data})
    
    }
    
    
    renderTableData() {
        return this.state.habits.map((habit) => {
            let streak = 0;
            return (
                
                <tr key={habit.id}>
                    <td><input type="checkbox"></input></td>
                    <td>{habit.name}</td>
                    <td>{habit.description}</td>
                    <td>{streak}</td>
                </tr>
                   
            )
        })
    }

    

    render() {
        return (
            <div>
                <table id='habits'>
                    <tbody>
                        <tr><td>COMPLETED</td><td>NAME</td><td>DESCRIPTION</td><td>STREAK</td></tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <Button variant="primary" type="submit">Log progress</Button>    
            </div>    
            
        );
    }
}