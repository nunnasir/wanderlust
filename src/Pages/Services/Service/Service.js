import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = (props) => {
    const history = useHistory();
    const { _id, name, description, image, price } = props.service;

    const serviceDetailHandler = () => {
        history.push(`placeOrder/${_id}`)
    }

    return (
        <>
            <Col>
                <Card>
                    <div className="p-3">
                        <Card.Img variant="top" src={image} className="rounded" />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-success">{name}</Card.Title>
                        <Card.Text className="text-muted">{description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <h4 className="text-success"><i className="fas fa-dollar-sign"></i>{price}</h4>
                        <button className="btn btn-success btn-sm text-white" onClick={serviceDetailHandler}>Book Now <i className="fas fa-arrow-right"></i></button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default Service;