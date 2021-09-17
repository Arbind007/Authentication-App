import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <div className="form-inline my-2 my-lg-0">
            {userData.user ? (
                <button className="btn btn-outline-success mx-2 text-white" onClick={logout}><h4>Logout</h4></button>
            ) : (
                <div>
                <button className="btn btn-outline-success mx-2 text-white " onClick={register}><h4>Sign Up</h4></button>
                <button className="btn btn-outline-success mx-2 text-white " onClick={login}><h4>Login</h4></button>
                </div>
            )}
        </div>
    )
}

export default AuthOptions;