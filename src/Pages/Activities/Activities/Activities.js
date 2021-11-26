import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Activity from '../Activity/Activity';

const activities = [
    { id: 1, name: 'Adventure', total: 15, image: 'https://i.ibb.co/174zc2t/adventure.png' },
    { id: 2, name: 'Trekking', total: 12, image: 'https://i.ibb.co/26PyPFM/trekking.png' },
    { id: 3, name: 'Camp Fire', total: 7, image: 'https://i.ibb.co/VSp54VD/campFire.png' },
    { id: 4, name: 'Off Road', total: 15, image: 'https://i.ibb.co/MkbJmT1/offroad.png' },
    { id: 5, name: 'Camping', total: 13, image: 'https://i.ibb.co/YdkW2NT/camping.png' },
    { id: 6, name: 'Exploring', total: 25, image: 'https://i.ibb.co/YRsQHFp/exploring.png' }
];

const Activities = () => {
    return (
        <Container>
            <Row>
                <div className="w-75 mx-auto text-center">
                    <h2>ADVENTURE & ACTIVITY</h2>
                    <p className="text-muted">This may include activities such as mountaineering, trekking, bungee jumping, mountain biking, cycling, canoeing, scuba diving, rafting, kayaking, zip-lining.</p>
                </div>
            </Row>

            <Row xs={1} md={6} className="g-4 mt-4">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                    ></Activity>)
                }
            </Row>
        </Container>
    );
};

export default Activities;