import React from 'react';
import firebaseAuthentication from '../Firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { Link,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

firebaseAuthentication()
const Login = () => {
    const {signInUsingGoogle}=useAuth()
    const history=useHistory()
    const location=useLocation()
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = (e) =>{
        e.preventDefault()
        signInUsingGoogle()
        .then((result) => {
            // This gives a Google Access Token to access the Google API.
            history.push(redirect_uri)
            console.log('redirect_uri',redirect_uri);
            console.log(result);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <div className="py-5 mt-5 bg-info d-flex align-items-center justify-content-center " style={{height:"81.4vh"}}>
                <Button className="w-25 text-dark py-3 rounded" variant="warning" type="submit" onClick={handleGoogleSignIn}>
                   LogIn with Google
                </Button>
        </div>
    );
};

export default Login;