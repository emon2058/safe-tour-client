import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    const {_id,name,img,description} = blog;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height="300px"/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
                <Card.Title  className="text-center" >
                        <Link to = {`/blogs/${_id}`}>
                            <Button variant="outline-primary">Read More</Button>
                        </Link>
                    </Card.Title>
            </Card>
        </Col>
    );
};

export default Blog;