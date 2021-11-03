import React from 'react'

import HenryFord from "../../Assets/img/attractions/henryford.jpg";
import Motown from "../../Assets/img/attractions/hitsville.jpg";
import DIA from "../../Assets/img/attractions/dia.jpg"

import "./StuffToDo.css"

const StuffToDo = () => {
    return (
        <div>
            <h1 id="attractionHeader">Things to Do</h1>
            <div id="touristSection">
                <div id="henryford" className="touristCard">
                    <a href="https://www.thehenryford.org/"><h2 className="touristTitle">The Henry Ford Museum</h2></a>
                    <img src={HenryFord} alt="The Henry Ford Museum" className="attractionimg"></img>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div id="hitsville" className="touristCard">
                    <a href="https://www.motownmuseum.org/"><h2 className="touristTitle">The Motown Museum</h2></a>
                    <img src={Motown} alt="Motown Museum" className="attractionimg"></img>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div id="hitsville" className="touristCard">
                    <a href="https://www.dia.org/"><h2 className="touristTitle">The Detroit Institute of Art</h2></a>
                    <img src={DIA} alt="DIA" className="attractionimg"></img>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </div>
    )
}

export default StuffToDo
