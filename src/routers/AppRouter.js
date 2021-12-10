import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { HeroeInfo } from '../components/hero/HeroeInfo';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';




export const AppRouter = () => {

        const dispatch = useDispatch()
        const {checking} = useSelector(state => state.auth)
     
        useEffect(() => {
                dispatch(startChecking())
        }, [dispatch])

        return (
                
                <Router>
                        <Routes>
                                <Route
                                        path='/*'
                                        element={
                                                <PrivateRoute
                                                        isAuthenticated={!!checking}
                                                        element={<HomeScreen/>}
                                                />
                                        }
                                />

                                <Route
                                        path='/login'
                                         element={
                                                <PublicRoute
                                                        isAuthenticated={!!checking}
                                                        element={<LoginScreen/>}
                                                />
                                        }
                                />
                                <Route
                                        path='/home/:heroId'
                                         element={
                                                <PrivateRoute
                                                        isAuthenticated={!!checking}
                                                        element={<HeroeInfo/>}
                                                />
                                        }
                                />
                        </Routes>
                        
                </Router>

        )
}
