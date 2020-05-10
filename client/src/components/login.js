import React from 'react';
import "../assets/login.css"
import { func } from 'joi';


function Login() {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [loading, setLoading] = React.useState(true);


    function handleEmailChange(e) {
        setUserEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setUserPassword(e.target.value)
    }


    const authHandler = async () => {
        axios.post('/login', {
            user_id: userEmail,
            password: userPassword
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });

    }

    return (<div>
        <div class="imgContainer">
            <div class="blueBg"></div>
        </div>

        <div class="content">
            <div class="" id="inputForm">
                <h3 class="title">
                    Hello, <br />
                    Welcome Back
                </h3>
                <div class="inputFieldRow" id="inputFields">
                    <p>ID</p>
                    <p>
                        <input class="inputField" type="email" value={userEmail} onChange={handleEmailChange}/>
                    </p>
                </div>
                <div class="inputFieldRow">
                    <p>Password</p>
                    <p>
                        <input class="inputField" type="password"  value={userPassword}  onChange={handlePasswordChange}/>
                    </p>
                    <p id="errorMessage"></p>
                </div>
                <button class="btn blue-btn" id='loginButton' disabled={loading}>{loading ? "Loading..." : "Login"}</button>
            </div>
        </div>
    </div>)
}

export default Login;