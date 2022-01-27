import React from 'react';
import { Card, Container, Image, Row,Col, Carousel } from 'react-bootstrap';
import banner from '../../../images/banner.jpg';
import bg1 from '../../../images/banner/bg1.jpg';
import bg2 from '../../../images/banner/bg2.jpg';
import bg3 from '../../../images/banner/bg3.jpg';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bg1}
                    height="650px"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div style={{color:'aqua'}}>
                            <h3>SAJEK VALLEY</h3>
                            <p>The biggest addiction a person can have is discovering the unknown. Once it takes hold, there is no getting out and the only way to get your fix is by pushing yourself out of your comfort zone and exploring new horizons, cultural, and places.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bg2}
                    height="650px"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div style={{color:'aqua'}}>
                            <h3>JAFLONG</h3>
                            <p>It’s never too late to have a life you love. Don’t ever feel like you’ve missed the boat, don’t have what it takes or can’t achieve your dreams. Instead of removing your dreams, remove the doubts and fears keeping you from them. It’s never, ever too late.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bg3}
                    height="650px"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div style={{color:'aqua'}}>
                            <h3>COX'S BAZAR</h3>
                            <p>To my mind, the greatest reward and luxury of travel is to be able to experience everyday things as if for the first time, to be in a position in which almost nothing is so familiar it is taken for granted.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <Card className="mt-5">
                <Card.Img src={banner} alt="Card image" />
                <Card.ImgOverlay className="text-center w-50 d-flex align-items-center">
                    <div>
                        <h1 className="text-success ">Man cannot discover new oceans<br/><span className="text-warning">unless he has the courage to lose sight of the shore</span></h1>
                    </div>
                </Card.ImgOverlay>
            </Card> */}
        </div>
    );
};

export default Banner;