import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
    return (
        <div id="bloomhaus-logo">
            <motion.img src="/assets/bloomhaus_logo-02.png" className="bloomhaus-logo"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}/>
        </div>
    );
}

export default Logo;