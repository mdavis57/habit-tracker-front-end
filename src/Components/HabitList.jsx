import React from 'react';
import axios from 'axios';


export default class HabitList extends React.Component {
    constructor() {
        super()
        this.state = {
            habits: []
            
    }
    };


    async componentDidMount() {
        const data = await axios.get('http://localhost:8080/user/id/habits', {
            headers: { authorization: window.localStorage.getItem('auth') }
        })
        this.setState({ habits : data.data})
    
    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit  => 
                    <li key={habit.id}>{habit.name}</li>
                )}
            </ul>
        );
    }
}