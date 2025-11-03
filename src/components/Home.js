import React from 'react';
import Navbar from "./Navbar";
import Logo from "./Logo";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div classname="home-container">
            <div class="logo-wrapper">
                <Logo />
                <motion.img src="/assets/band-yellow-comp.webp" class="band-yellow"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} />
                <Navbar />
            </div>
            
            <motion.img src="/assets/flowers-transp-comp.webp" class="flowers-transp"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }} />
            <Socials/>
        </div>
    );
};

export default Home;