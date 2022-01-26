import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Book = () => {
    const {user} = useAuth();
    const [booking,setBooking]=useState([]);

    const {id} = useParams()
    useEffect(()=>{
        const url=`https://polar-shelf-69370.herokuapp.com/services/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    const handleSubmit = (booking) =>{
        console.log(booking);
        axios.post('https://polar-shelf-69370.herokuapp.com/booking',booking)
        .then(res => {
            if(res.data.insertedId){
                console.log('inserted');
            }
        })
    }
    return (
        <div className="py-5 mt-5">
            <Container>
                <Row className="g-4 m-2 justify-content-center">
                    <Col md lg={6}>
                        <Card>
                            <Card.Img variant="top" src={booking.img} height="300px"/>
                            <Card.Body>
                            <Card.Title className="d-flex justify-content-between"><span>{booking.title}</span><span>${booking.price}</span></Card.Title>
                            <Card.Text>
                                {booking.description}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md lg={4}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="text" rows={2} defaultValue={user.displayName || ''}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" defaultValue={user.email || ''} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="number" rows={2} placeholder="mobile number"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="message"/>
                            </Form.Group>
                            <Link to="/">
                                <Button variant="primary" onClick={()=>handleSubmit(booking)}>BOOK NOW</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Book;