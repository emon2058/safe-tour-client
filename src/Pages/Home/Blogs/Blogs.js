import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [pageNumber,setPageNumber] = useState(0);
    const [page,setPage] = useState(0);
    const [blogs,setBlogs] = useState([]);
    const size=3;
    useEffect(()=>{
        const url=`https://polar-shelf-69370.herokuapp.com/blogs?page=${page}&&size=${size}`;
        const url1=`http://localhost:5000/blogs?page=${page}&&size=${size}`;
        fetch(url1)
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data.blogs)
            const count = data.count;
            const pageCount = Math.ceil(count/size)
            setPageNumber(pageCount)
        })
    },[page])
    return (
        <div className='p-4 text-center'>
            <h1>Blogs</h1>
            <Container>
                <Row>
                    {/* <Col xs={4}>
                    <p>River</p>
                    <p>Hill</p>
                    <p>Rock</p>
                    <p>Forest</p>
                    </Col> */}
                    <Col>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {blogs.map(blog=><Blog
                            key={blog._id}
                            blog={blog}></Blog>)}
                        </Row>
                    </Col>
            <Pagination size="sm" style={{paddingLeft:'40%'}}>{[...Array(pageNumber).keys()].map(number=><Button variant={number===page?"primary":"secondary"} className='mx-3 my-4 '
            key={number}
            onClick={()=>setPage(number)}>{number+1}</Button>)}
            </Pagination>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;