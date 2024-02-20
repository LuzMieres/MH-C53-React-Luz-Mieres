import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <p>&#169; 2024 - All rights reserved</p>
            <div className="socialIcons">
                <a href="#" target="_blank" ><img className="socialIcon" src="src/assets/logo-instagram.jpeg" alt="logo-instagram" /></a>
                <a href="#" target="_blank" ><img className="socialIcon" src="src/assets/logo-facebook.jpeg" alt="logo-facebook" /></a>
                <a href="#" target="_blank" ><img className="socialIcon" src="src/assets/logo-whatsapp.png" alt="logo-whatsapp" /></a>
            </div>
        </div>
    );
};

export default Footer;