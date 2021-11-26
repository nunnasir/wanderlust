import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Activity = (props) => {
    const { name, total, image } = props.activity;

    return (
        <>
            <Col>
                <Card className="p-4 text-center">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{total} Destination</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Activity;