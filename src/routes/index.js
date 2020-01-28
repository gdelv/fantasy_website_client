import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../screens/Home'
import Landing from '../screens/Landing'
import SignIn from '../screens/LogIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'


const Routes = ({ user, setUser, clearUser }) => (
    <Switch>
        <Route
            exact
            path='/'

            render={props => (user ?  <Home {...props}/> : <Landing />  )}

        />
        <Route
            exact
            path='/sign-in'
            render={props => <SignIn {...props} setUser={setUser} user={user} />}
        />
        <Route
            exact
            path='/sign-up'
            render={props => <SignUp {...props} setUser={setUser} />}
        />
        <Route
            exact
            path='/sign-out'
            render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
        />
      

    </Switch>

)

export default Routes