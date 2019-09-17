import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NewHabit from './pages/NewHabit'
import Layout from './Layout'
import NewBlog from './pages/NewBlog'



export const Routes = () => {
    return (
        <Router>
            <Layout>
                <div style={{ marginTop: '100px' }}>
                    <Route path="/login" exact component={Login} />
                    <Route path="/signUp" exact component={SignUp} />
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/newhabit" exact component={NewHabit} />
                    <Route path="/newblog" exact component={NewBlog} />
                    
                </div>
            </Layout>
        </Router>
    )
}
