import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';

function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <h1 className="text-center">Welcome {userData.user.displayName}</h1>
            ) : (
                <div className="text-center">
                    <h2>You are not logged in</h2>
                    <Link to="/login"><h3>Login</h3></Link>
                </div>
            )}
        </div>
    );
}
 
export default Home;