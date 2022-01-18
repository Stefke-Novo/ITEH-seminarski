import React from 'react'
import "./MainMenu.css"
import {Switch , Link,Route} from "react-router-dom"
import Home from "../../Pages/Home/Home"
import AboutUs from '../../Pages/About us/AboutUs'
import Register from '../../Pages/Register/Register'
import LogIn from '../../Pages/LogIn/LogIn'
import Contact from '../../Pages/Contact/Contact'
import Collection from '../../Pages/Collection/Collection'
import Dashboard from '../../Pages/Dashboard/Dashboard'
function MainMenu() {
    return (
        <>
        <div id='meni'>
            <h1>BestReads Reviews</h1>
            <ul>
                <li>
                    <Link  to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/collection">Collection</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
        <Switch>
            <Route index path="/home">
                <Home/>
            </Route>
            <Route index path="/aboutus">
                <AboutUs/>
            </Route>
            <Route index path="/collection">
                <Collection/>
            </Route>
            <Route index path="/contact">
                <Contact/>
            </Route>
            <Route index path="/login">
                <LogIn/>
            </Route>
            <Route index path="/register">
                <Register/>
            </Route>
            <Route to="/dashboard">
                <Dashboard/>
            </Route>
        </Switch>
        </>
    )
}

export default MainMenu
