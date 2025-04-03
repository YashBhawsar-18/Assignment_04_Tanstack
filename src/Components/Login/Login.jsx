import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import loginUser from '../Api/api';
import { useNavigate } from 'react-router-dom';
import './login.css'


const Login = () => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate();

    const mutationLogin = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // console.log("data from mutatefun",data);
            localStorage.setItem("Token", data.accessToken)
            navigate("/dashboard");
            

        }
        
    })

    const handleuser = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("handlesubmit",username);
        mutationLogin.mutate({username, password})

    }

  return (
    <>
       <div className="login-container">
         <form className="login-form" onSubmit={handleSubmit}>
        <input onChange={handleuser} type="text" placeholder="Username" />
        <input onChange={handlePassword} type="password" placeholder="Password" />
        <button type="submit">Login</button>
    </form>
</div>

    </>
  )
}

export default Login