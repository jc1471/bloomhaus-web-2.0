import React from 'react';
import Navbar from "./Navbar";
import Logo from "./Logo";

const Home = () => {
    return (
        <div classname="home-container">
            <Logo/>
            <Navbar />
        </div>
    );
};

export default Home;