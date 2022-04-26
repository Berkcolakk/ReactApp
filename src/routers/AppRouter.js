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
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        )
    }
}
export default AppRouter;