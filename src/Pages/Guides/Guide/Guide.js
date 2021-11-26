import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Guide.css';

const Guide = (props) => {
    const { name, title, image } = props.guide;

    return (
        <>
            <Col>
                <Card className="text-center">
                    <div className="p-3">
                        <Card.Img variant="top" src={image} className="rounded" />
                    </div>
                    <Card.Body className="px-5">
                        <Card.Title className="text-success">{name}</Card.Title>
                        <Card.Text><small>{title}</small></Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <span className="icon bg-success text-white"><i className="fab fa-facebook-f"></i></span>
                        <span className="icon bg-success text-white"><i className="fab fa-twitter"></i></span>
                        <span className="icon bg-success text-white"><i className="fab fa-linkedin-in"></i></span>
                        <span className="icon bg-success text-white"><i className="fab fa-pinterest-p"></i></span>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default Guide;