import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Booking from '../Booking/Booking';

const AllBookings = () => {
    const [booking,setBooking] = useState([])
    useEffect(()=>{
        const url = "https://polar-shelf-69370.herokuapp.com/booking";
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    return (
        <div className="mt-5">
            <h1 className="text-center pt-3">Booking</h1>
            <Container>
                <Row xs={1} md={2} lg={2} className="g-4 m-2">

                {booking.map(book=><Booking
                    key={book._id}
                    book={book}></Booking>)}
                </Row>
            </Container>
        </div>
    );
};

export default AllBookings;