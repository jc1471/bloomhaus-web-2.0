import React from 'react';
import BloomhausLogo from "../assets/bloomhaus_logo-02.png"

const Logo = () => {
    return (
        <div id="bloomhaus-logo">
            <img src={BloomhausLogo} className="bloomhaus-logo" />
        </div>
    );
}

export default Logo;