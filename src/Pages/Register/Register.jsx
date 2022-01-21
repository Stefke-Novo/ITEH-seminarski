import React,{ useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import "./Register.css"

function Register() {
    const history=useHistory();
    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        //error_list:[],
      });

      const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
      };
    
      const registerSubmit = (e) => {
        e.preventDefault();
    
        axios.get("http://localhost:8000/sanctum/csrf-cookie").then(res => {
          axios.post(`http://localhost:8000/api/register`, registerInput).then(res => {
                axios.defaults.headers.post['X-CSRF-Token'] = res.data.CSRFToken;
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('auth_name',res.data.username);
                swal("Success","Successfully Registered","success");
                history.push('/home');
          });
          
        });
      }
    return (
        <div id='registerPage'>
            <form onSubmit={registerSubmit} id='registerForm'>
              <h1>Registration</h1>
              <div className='registerField'>
                <label>Full Name</label>
                <input type="text" name="name" onChange={handleInput} value={registerInput.name}  className="form-control"/>
                {/* <span>{registerInput.error_list.name}</span> */}
              </div>
              <div className='registerField'>
                <label>Email</label>
                <input type="email" name="email" onChange={handleInput} value={registerInput.email} className="form-control"/>
                {/* <span>{registerInput.error_list.email}</span> */}
              </div>
              <div className='registerField'>
                <label>Password</label>
                <input type="password" name="password" onChange={handleInput} value={registerInput.password} className="form-control" />
                {/* <span>{registerInput.error_list.password}</span> */}
              </div>
              <div >
                <button type="submit" className="btn btn-primary"> Register </button>
              </div>
            </form>
        </div>
    )
}

export default Register
