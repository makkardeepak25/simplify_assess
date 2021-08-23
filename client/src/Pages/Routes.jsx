import React from 'react'
import {Switch,Route} from "react-router-dom"
import { Auth } from './Auth/Auth'
import { Login } from './Auth/Login/Login'
import { Register } from './Auth/Register/Register'
import { Home } from './Home/Home'

export function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/auth">
                    <Auth/>
                </Route>
                <Route exact path="/auth/register">
                    <Register/>
                </Route>
                <Route exact path="/auth/login">
                    <Login/>
                </Route>

            </Switch>
        </div>
    )
}
