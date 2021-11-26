import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();

    return (
        <Container>
            <Row>
                <div className="w-75 mx-auto text-center">
                    <h2>FEATURE PACKAGES</h2>
                    <p className="text-muted">These packages include all the essential features that are required by every traveller like food, accommodation and transportation.</p>
                </div>
            </Row>

            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>

        </Container>
    );
};

export default Services;