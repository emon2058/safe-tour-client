import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import img1 from '../../../images/Business/emirates.png'
import img2 from '../../../images/Business/biman.jpg'
import img3 from '../../../images/Business/malaysia-airlines.jpg'
import img4 from '../../../images/Business/US-Bangla-Airlines.jpg'
const BusinessArea = () => {
    return (
        <div>
            <h1 className="text-primary text-center">Business Area</h1>
            <Stack direction="horizontal" gap={3} className='mx-auto'>
                <Container>
                    <img src={img1} alt="" width="250px"/>
                    <img src={img2} alt="" width="250px" />
                    <img src={img3} alt="" width="250px" />
                    <img src={img4} alt="" width="250px" />
                </Container>
            </Stack>
        </div>
    );
};

export default BusinessArea;