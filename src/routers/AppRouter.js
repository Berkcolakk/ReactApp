import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../layouts/NotFound';
import Login from '../components/Login/Login';
import Navbar from '../layouts/Navbar';
import Home from '../components/Main/Main';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Navbar appName={this.props.appName} currentUser={this.props.currentUser} />
                <Routes>
                    <Route exact path='/' currentUser={this.props.currentUser} element={<Home />}></Route>
                    <Route exact path='/login' currentUser={this.props.currentUser} element={<Login />}></Route>
                    <Route path="*" currentUser={this.props.currentUser} element={<NotFound />}></Route>
                </Routes>
            </Router>
        )
    }
}
export default AppRouter;