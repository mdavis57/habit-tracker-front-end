import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Habit from './pages/Habit'
import Habits from './pages/Habits'
import Categories from './pages/Categories'
import Layout from './Layout'

export const Routes = () => {
    return (
        <Router>
            <Layout>
                <div style={{ marginTop: '100px' }}>
                    <Route path="/login" exact component={Login} />
                    <Route path="/signUp" exact component={SignUp} />
                    <Route path="/" exact component={Home} />
                    <Route path="/habits" exact component={Habits} />
                    <Route path="/habit/:id" exact component={Habit} />
                    <Route path="/categories" exact component={Categories} />
                </div>
            </Layout>
        </Router>
    )
}
