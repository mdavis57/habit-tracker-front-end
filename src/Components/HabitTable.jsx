import React from 'react';
import axios from 'axios';


export default class HabitTable extends React.Component {
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

    renderTableData() {
        return this.state.habits.map((habit) => {
            return (
                <tr key={habit.id}>
                    <td>{habit.id}</td>
                    <td>{habit.name}</td>
                    <td>{habit.description}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div>
                <h1 id='title'>Habits</h1>
                <table id='habits'>
                    <tbody>
                        <tr><td>ID</td><td>NAME</td><td>DESCRIPTION</td></tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>    
            
        );
    }
}