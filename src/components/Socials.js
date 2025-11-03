import React from 'react';
import { motion } from "framer-motion";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://www.instagram.com/bloomhausmusic" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
                        <a href="https://open.spotify.com/intl-es/artist/0YlHl0Fe4sUrNKM5U1pTKb" target="_blank" rel="noopener noreferrer">
                <FaSpotify/>
            </a>
                        <a href="https://www.https://www.youtube.com/@bloomhausmusic.com/bloomhausmusic" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
            </a>
        </div>
    )
}

export default Socials