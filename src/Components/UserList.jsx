import React from 'react';
import axios from 'axios';


export default class UserList extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8080/user').then(res => {
            console.log(res);
            this.setState({ users: res.data })
        });
    }
    render() {
        return (
            <ul>
                {this.state.users.map(user => 
                    <li key={user.id}>{user.username}</li>
                )}
            </ul>
        );
    }
}