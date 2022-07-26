import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
        <div className=''>
            <div className='row'>
                <div className=''>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1657299143322-934f44698807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1658488228765-d24c30b8d80a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1658656980760-f310f781725c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Slider;