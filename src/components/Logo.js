import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
    return (
        <div id="bloomhaus-logo">
            <motion.img src="/assets/bloomhaus_logo-02.png" className="bloomhaus-logo"
                initial={{ opacity: 0, y: -20, filter: 'brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(3543%) hue-rotate(356deg) brightness(80%) contrast(90%)drop-shadow(0 8px 2px rgba(0, 0, 0, 0.25))' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}/>
        </div>
    );
}

export default Logo;