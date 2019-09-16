import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'






export const NavBar = ({ color }) => (
    <AppBar color={color}>
        <Toolbar>
            <h1>Habit Tracker</h1>
            
            
        
        </Toolbar>
    </AppBar>
)