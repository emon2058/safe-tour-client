import React, { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';

const Booking = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const {_id,img,title,price,description} = props.book;
    const removeBook = id =>{
        const url = `https://polar-shelf-69370.herokuapp.com/booking/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( data => {
            if(data.deletedCount){
                window.location.reload()
            }
        })
    }
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
                        <Button variant="primary" onClick={handleShow}>
                            Remove Book
                        </Button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>DO YOU WANT TO DELETE THIS?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            Think Again
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                NO
                            </Button>
                            <Button variant="outline-danger" onClick={()=>removeBook(_id)}>Remove Book</Button>
                            </Modal.Footer>
                        </Modal>        
                    </Card.Title>
                </Card>
            </Col>
        </>
    );
};

export default Booking;