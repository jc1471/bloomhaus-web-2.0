import React from 'react';
import Navbar from "./Navbar";
import Logo from "./Logo";
import BandYellow from "../assets/BAND YELLOW.png";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div classname="home-container">
            <Logo />
            <motion.img src={BandYellow} class="band-yellow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 10.8 }}/>
            <Navbar />
        </div>
    );
};

export default Home;