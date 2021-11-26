import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import slider1 from '../../../images/slider/slider-1.jpg';
import slider2 from '../../../images/slider/slider-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-image"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>TRAVELLING AROUND THE WORLD</h1>
                            <p>Ever dreamt of travelling around the world with your backpack? We've been travelling full time for 5+ years and share with you our best travel tips!</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-image"
                            src={slider2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h1>EXPERIENCE THE NATURE'S BEAUTY</h1>
                            <p>Our Wanderlust started out of a vision to see others really enjoy the beauty of nature, and experienc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
};

export default Banner;