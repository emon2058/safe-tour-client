import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    console.log(isLoading);
    if(isLoading){
        return (
            <div className="mt-5 pt-5 text-center">
                <Spinner animation="border" variant="info"/>
            </div>
            )
    }
        console.log('...rest',{ ...rest})
        return (
        <Route
            {...rest}
            render={({location})=>user.email ? children : <Redirect 
            to={{
                pathname: "/login",
                state:{from:location}
            }}></Redirect>
            }
            >
            
        </Route>
    );
};

export default PrivateRoute;