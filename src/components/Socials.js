import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return (
        <motion.div className="socials"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}>
            <a href="https://www.instagram.com/bloomhausmusic" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
                        <a href="https://open.spotify.com/intl-es/artist/0YlHl0Fe4sUrNKM5U1pTKb" target="_blank" rel="noopener noreferrer">
                <FaSpotify/>
            </a>
                        <a href="https://www.https://www.youtube.com/@bloomhausmusic.com/bloomhausmusic" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
            </a>
        </motion.div>
    )
}

export default Socials