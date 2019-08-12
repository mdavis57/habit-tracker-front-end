import React from 'react'
import UserList from '../Components/UserList.jsx'
import UserInput from '../Components/UserInput'

export default () => {
  return (
    <div>
      <h1 style={{display: 'flex', justifyContent:'center', height: '5vh'}}>Register</h1>
      <div style={{display: 'flex', justifyContent:'center', height: '100vh'}}>
        <UserInput />
      </div>
    </div>
  )
}
