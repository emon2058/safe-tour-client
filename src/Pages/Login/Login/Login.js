import React from 'react';
import firebaseAuthentication from '../Firebase/firebase.init';
import Button from 'react-bootstrap/Button';
import { Link,NavLink,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Form } from 'react-bootstrap';

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
        <div className="py-5 mt-5 bg-info px-5 " style={{height:"81.4vh"}}>
            <h1>Log In</h1><br/>
            {/* <form>
                <input type="text" name="name" placeholder="email"/><br/>
                <input type="password" name="password" placeholder="your password"/><br/>
                <Button>Login</Button>
            </form><br/> */}
            <Form>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" style={{marginLeft:'25%'}} type="submit">
                    Login
                </Button>
            </Form>
            Don't have an account? <NavLink to='/register'> Register</NavLink>
                <Button className="w-25 text-dark py-3 my-3 rounded" style={{marginLeft:'40%'}} variant="warning" type="submit" onClick={handleGoogleSignIn}>
                   LogIn with Google
                </Button>
        </div>
    );
};

export default Login;