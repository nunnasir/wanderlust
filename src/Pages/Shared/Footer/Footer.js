import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark">
                <Container className="text-secondary d-flex justify-content-between p-3">
                    <p className="m-0">&copy; {new Date().getFullYear()} Wanderlust. All rights reserved</p>
                    <div>
                        <span className="footer-icon ms-3"><i className="fab fa-facebook-f"></i></span>
                        <span className="footer-icon ms-3"><i className="fab fa-twitter"></i></span>
                        <span className="footer-icon ms-3"><i className="fab fa-linkedin-in"></i></span>
                        <span className="footer-icon ms-3"><i className="fab fa-pinterest-p"></i></span>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;