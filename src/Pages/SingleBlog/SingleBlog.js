import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const {id} = useParams()
    const [blog,setBlog] = useState([]);

    useEffect(()=>{
        const url=`http://localhost:5000/blogs/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>
            <div className="py-5 mt-5">
            <Container>
                <Row md={2} className="g-4 m-2 justify-content-center">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={blog.img} height="300px"/>
                            <Card.Body>
                            <Card.Title className="d-flex justify-content-between"><span>{blog.name}</span></Card.Title>
                            <Card.Text>
                                {blog.description}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default SingleBlog;