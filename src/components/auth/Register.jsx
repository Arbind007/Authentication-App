import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";

function Register () {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName};
            await axios.post("https://authappjwt.herokuapp.com/users/register", newUser);
            const loginResponse = await axios.post("https://authappjwt.herokuapp.com/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            console.log(err);
        }
        
    };
   
    return (
        <div className="container">
            <div id="signupbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="text-center">
                    <h2>Register</h2>
            </div>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
            <form onSubmit={submit}>
                <label>Email: </label>
                <input type="email" id="email" onChange={e => setEmail(e.target.value)} class="form-control mb-3"/>
                <label>Password: </label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)} className="form-control mb-3" />
                <label>Confirm Password: </label>
                <input type="password" placeholder="Confirm password" onChange={e => setPasswordCheck(e.target.value)} className="form-control mb-3"/>
                <label>Display name </label>
                <input type="text" id="dsplay-name" onChange={e => setDisplayName(e.target.value)} className="form-control mb-3"/>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </div>
        </div>
        );
}
 
export default Register;