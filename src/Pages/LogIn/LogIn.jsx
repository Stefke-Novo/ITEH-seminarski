import React,{useState} from 'react'
import "./LogIn.css"
import {Link} from "react-router-dom"
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
function Login() {

    const history = useHistory();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
    //error_list:[],
  });
  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(response => {
      console.log(response.headers);
      axios.post(`http://localhost:8000/api/login`, data).then(res => {
        if(res.data.status===200){
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", res.data.username);
        swal("Success", "Login Successful", "success");
        history.push("/home");
        }
      });
    });
  };
    return (
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                        <h2>Log in</h2>
                        <input type="email" className='field' name="email" placeholder='Your e-mail' onChange={handleInput} value={loginInput.email}/>
                        <input type="email" className='field' name="password" placeholder='Your password'  onChange={handleInput} value={loginInput.password}/>
                        <button className='btn' onClick={loginSubmit}>Log in</button>
                        <h2 id='head1LogIn'>No account?</h2>
                        <h4 id='head4LogIn'>Go to <Link to="/register">Register</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
