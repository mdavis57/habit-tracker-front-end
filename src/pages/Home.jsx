import React from 'react'
import { Button } from '@material-ui/core'


export default () => {
  return (
    <div>
      <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
        Welcome to Habit Tracker!
      </h1>
      
      <div style={{display: 'flex', justifyContent:'center', height: '10vh'}}>
        <Button variant="primary" href="/login">Login</Button>
        <Button variant="primary" href="/signup">Register</Button>
      </div>
      

    </div>

  ) 
}

