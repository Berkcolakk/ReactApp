import { combineReducers } from "@reduxjs/toolkit";
import { routerReducer } from 'react-router-redux';
import login from '../reducers/LoginReducers';
import common from '../reducers/common';

export default combineReducers({
    login,
    common,
    router:routerReducer
});