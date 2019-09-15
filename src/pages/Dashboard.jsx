import React from 'react'
import Auth from '../components/Auth';
import HabitList from '../components/HabitList';
import { Button } from '@material-ui/core'
import LogOut from '../components/LogOut';




class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Dashboard</h1>
        <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
          <Button variant="primary" href="/newhabit">Add new habit</Button>
          <LogOut />
        </div>
        <div>
          <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>My Habits</h1>
          <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
            <HabitList />
          </div>
        </div>
       
      </div>
    );
  } 
}
export default Auth(Dashboard)