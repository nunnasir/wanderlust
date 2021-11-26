import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Guide from '../Guide/Guide';

const guides = [
    { id: 1, name: 'Sony Madison', title: 'Travel Agent', image: 'https://i.ibb.co/Srb2tGg/img38.jpg' },
    { id: 2, name: 'Alison White', title: 'Travel Agent', image: 'https://i.ibb.co/9ZQFm7m/img39.jpg' },
    { id: 3, name: 'William Hobb', title: 'Travel Guide', image: 'https://i.ibb.co/x5qZz5K/img43.jpg' },
    { id: 4, name: 'Jennie Bennett', title: 'Travel Guide', image: 'https://i.ibb.co/gJnYL3f/img42.jpg' }
];

const Guides = () => {
    return (
        <Container>
            <Row>
                <div className="w-75 mx-auto text-center">
                    <h2>OUR TOUR GUIDE</h2>
                </div>
            </Row>

            <Row xs={1} md={4} className="g-4 mt-4">
                {
                    guides.map(guide => <Guide
                        key={guide.id}
                        guide={guide}
                    ></Guide>)
                }
            </Row>
        </Container>
    );
};

export default Guides;