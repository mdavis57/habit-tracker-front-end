import React from 'react';
import axios from 'axios';


export default class HabitList extends React.Component {
    state = {
        habits: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/habits').then(res => {
            const habits = res.data
            this.setState({ habits })
        });
    }
    render() {
        const names = this.state.habits.name
        ? this.state.habits.name.split(',')
        : [];
        return (
            <ul>
                {this.state.habits.map(habit  => 
                    <li key={habit.id}>{habit.name}</li>
                )}
            </ul>
        );
    }
}