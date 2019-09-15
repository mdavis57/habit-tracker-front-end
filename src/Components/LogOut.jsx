import React from 'react';
import { Button } from '@material-ui/core'

export default class LogOut extends React.Component {
    constructor(props) {
        super(props)
        this.LogOut = this.LogOut.bind(this);
    }
    
    LogOut() {
        window.localStorage.removeItem('auth')
        window.location.reload(false);
    
    }

    render() {
        return (
            <Button onClick={this.LogOut}>Logout</Button>
            
            
            
        )
    }
}
