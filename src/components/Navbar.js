import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div >
            <motion.nav class="navbar"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}>       
                <Link to="/music">MUSIC</Link>
                <Link to="/videos">VIDEOS</Link>
                <Link to="/live">LIVE</Link>
                <Link to="/contact">CONTACT</Link>
            </motion.nav>
        </div>
    )
}

export default Navbar