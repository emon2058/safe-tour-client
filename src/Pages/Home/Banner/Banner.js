import React from 'react';
import { Card, Container, Image, Row,Col } from 'react-bootstrap';
import banner from '../../../images/banner.jpg';
const Banner = () => {
    return (
        <div>
            <Card className="mt-5">
                <Card.Img src={banner} alt="Card image" />
                <Card.ImgOverlay className="text-center w-50 d-flex align-items-center">
                    <div>
                        <h1 className="text-success ">Man cannot discover new oceans<br/><span className="text-warning">unless he has the courage to lose sight of the shore</span></h1>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;