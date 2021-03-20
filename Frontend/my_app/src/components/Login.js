import React, {useState, useEffect} from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    let history = useHistory()

    /*useEffect(() => {
       if(token['mytoken']){
           history.push('/article') 
       }
    }, [token])*/

    const loginbtn = () => {
        console.log('clicked')
        APIService.LoginUser({username, password}, token)
        .then(resp => setToken('mytoken', resp.token))
        .catch(e => console.log(e))  
    }

    return (
        <div className = "App">

            <h1 style = {{color : '#282c34'}} className = "jumbotron">Login</h1>
 
            

            <div className = "mb-3">
                <label htmlFor = "username" className = "form-label">Username</label>
                <input id = "username" type = "text" className = "form-control" placeholder = "Enter Username" value = {username} onChange = {e => setUsername(e.target.value)}/>
            </div>

            <div className = "mb-3">
                <label htmlFor = "password" className = "form-label">Password</label>
                <input id = "password" type = "password" className = "form-control" placeholder = "Enter Password " value = {password} onChange = {e => setPassword(e.target.value)}/>
            </div>
            <br/>
            <br/>
            <button className = 'btn btn-primary' onClick = {loginbtn}>Log in</button>        
        </div>
    )
}

export default Login
