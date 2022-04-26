import { configureStore } from '@reduxjs/toolkit'
import reducer from './Reducers'
import { routerReducer } from 'react-router-redux';


export const store = configureStore({
    reducer
    });