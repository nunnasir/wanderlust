import React from 'react';
import Activities from '../../Activities/Activities/Activities';
import Guides from '../../Guides/Guides/Guides';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
            </div>
            <div className="py-5">
                <Services></Services>
            </div>
            <div className="py-5 bg-light">
                <Activities></Activities>
            </div>
            <div className="py-5">
                <Guides></Guides>
            </div>
        </>
    );
};

export default Home;