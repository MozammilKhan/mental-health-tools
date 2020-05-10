import React from 'react';
import axios from 'axios';
import "../assets/login.css"

function Login() {
    const [userName, setuserName] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);


    function handleEmailChange(e) {
        setuserName(e.target.value);
    }

    function handlePasswordChange(e){
        setUserPassword(e.target.value)
    }


    const authHandler = async () => {
        setLoading(true);
        axios.post('api/auth/login', {
            user_id: userName,
            password: userPassword
          })
          .then((response) => {
            if (response.status === 200){
                setLoading(false);
                console.log(response.data);

            }
            else{
                throw Error(response.error);
            }
          }, (error) => {
            console.log(error);
            alert('Error logging in please try again');
            setLoading(false);
            setuserName("");
            setUserPassword("");
          });
    };

    return (<div>
        <div className="imgContainer">
            <div className="blueBg"></div>
        </div>

        <div className="content">
            <div className="" id="inputForm">
                <h3 className="title">
                    Hello, <br />
                    Welcome Back
                </h3>
                <div className="inputFieldRow" id="inputFields">
                    <p>ID</p>
                    <p>
                        <input className="inputField" type="text" value={userName} onChange={handleEmailChange}/>
                    </p>
                </div>
                <div className="inputFieldRow">
                    <p>Password</p>
                    <p>
                        <input className="inputField" type="password"  value={userPassword}  onChange={handlePasswordChange}/>
                    </p>
                    <p id="errorMessage"></p>
                </div>
                <button className="btn blue-btn" id='loginButton' disabled={loading} onClick={authHandler}>{loading ? "Loading..." : "Login"}</button>
            </div>
        </div>
    </div>)
}

export default Login;
