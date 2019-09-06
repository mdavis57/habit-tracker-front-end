import React from 'react';
import axios from 'axios';


export default class HabitList extends React.Component {
    state = {
        habits: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/user/id/habits').then(res => {
            console.log(res);
            this.setState({ habits: res.data })
        });
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