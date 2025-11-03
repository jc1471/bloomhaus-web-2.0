import React from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div >
            <motion.nav class="navbar"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <a>MUSIC</a>
                <a>VIDEOS</a>
                <a>LIVE</a>
                <a>CONTACT</a>
            </motion.nav>
        </div>
    )
}

export default Navbar