import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,img,title,price,description}=props.service;
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="300px"/>
                    <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <span>{title}</span>
                        <span>${price}</span>
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Title  className="text-center" >
                        <Link to = {`/booking/${_id}`}>
                            <Button variant="outline-primary">BOOK</Button>
                        </Link>
                    </Card.Title>
                </Card>
            </Col>
        </>
    );
};

export default Service;