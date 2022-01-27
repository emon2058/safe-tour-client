import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import BusinessArea from '../BusinessArea/BusinessArea';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const {isLoading} = useAuth()
    if(isLoading){
        return (
            <div className="mt-5 pt-5 text-center">
                <Spinner animation="border" variant="info"/>
            </div>
            )
    }
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            {/* <Services></Services> */}
            <Testimonials></Testimonials>
            <BusinessArea></BusinessArea>
        </div>
    );
};

export default Home;