import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Row from 'react-bootstrap/Row';

const Services = () => {
    const[services,setServices] = useState([]);
    
    useEffect(()=>{
        fetch('https://polar-shelf-69370.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-center">Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 m-2">

            {services.map(service=><Service
                key={service._id}
                service={service}></Service>)}
            </Row>
        </div>
    );
};

export default Services;