import React from 'react'
import Auth from '../components/Auth';
import HabitList from '../components/HabitList';
import { Button } from '@material-ui/core'
import LogOut from '../components/LogOut';
import HabitTable from '../components/HabitTable';







class Dashboard extends React.Component {
  render() {
    return (
      <div>
        
        <div style={{display: 'flex', justifyContent:'center', height: '5vh'}}>
          <LogOut />
        </div>
        <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Dashboard</h1>
        <div>
          
          <HabitTable />
          
        </div>
        
      
       
      </div>
    );
  } 
}
export default Auth(Dashboard)