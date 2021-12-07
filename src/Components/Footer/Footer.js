import React from 'react'

import "./Footer.css";

import FlowersFooter from "../../Assets/img/flowersFooter.png"

const Footer = () => {
    return (
        <div>
            {/* <img src={FlowersFooter} alt="Flower decoration" id="flowerImageFooter"></img> */}
            <p id="footerText">Created by <a href="https://alcantaradevelopment.com/" id="devLink">Alcantara Development</a></p>
        </div>
    )
}

export default Footer
