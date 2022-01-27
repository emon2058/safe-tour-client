import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const [registerData,setRegisterData] = useState({});

    return (
        <div className="py-5 mt-5 bg-info px-5 " style={{height:"81.4vh"}}>
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary"  style={{marginLeft:'25%'}} type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;