import React from 'react'
import { NavBar } from './NavBar'

export default ({ children }) => (
  <>
    <NavBar color={'secondary'} />
    {children}
  </>
) 

