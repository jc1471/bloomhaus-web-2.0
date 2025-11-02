import React from 'react';
import Navbar from "./Navbar";
import Logo from "./Logo";
import BandYellow from "../assets/BAND YELLOW.png"

const Home = () => {
    return (
        <div classname="home-container">
            <Logo />
            <img src={BandYellow} class="band-yellow"/>
            <Navbar />
        </div>
    );
};

export default Home;