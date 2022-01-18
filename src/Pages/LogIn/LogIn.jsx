import React from 'react'
import "./LogIn.css"
import {Link} from "react-router-dom"
function Login() {
    return (
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2>Log in</h2>
                        <input type="email" className='field' placeholder='Your e-mail' />
                        <input type="email" className='field' placeholder='Your password' />
                        <button className='btn'>Log in</button>
                        <h2 id='head1LogIn'>No account?</h2>
                        <h4 id='head4LogIn'>Go to <Link to="/register">Register</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
