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
                    <a href="https://www.thehenryford.org/" className="touristTitle" target="_blank" rel="noreferrer"><h2 className="titleH2">The Henry Ford Museum</h2></a>
                    <img src={HenryFord} alt="The Henry Ford Museum" className="attractionimg"></img>
                    <p>"The Henry Ford Museum of Innovation is a collection of artifacts and exhibits showcasing the people and ideas who changed the world."</p>
                </div>
                <div id="hitsville" className="touristCard">
                    <a href="https://www.motownmuseum.org/" className="touristTitle" target="_blank" rel="noreferrer"><h2 className="titleH2">The Motown Museum</h2></a>
                    <img src={Motown} alt="Motown Museum" className="attractionimg"></img>
                    <p>"Motown Museum is home to iconic Hitsville U.S.A., Studio A, and an extensive array of Motown artifacts, photographs, apparel and memorabilia."</p>
                </div>
                <div id="hitsville" className="touristCard">
                    <a href="https://www.dia.org/" className="touristTitle" target="_blank" rel="noreferrer"><h2 className="titleH2">The Detroit Institute of Art</h2></a>
                    <img src={DIA} alt="DIA" className="attractionimg"></img>
                    <p>"The Detroit Institute of Arts, known affectionately as the DIA, is a world-renowned art museum. The DIA has over 65,000 works, including an extensive American art collection. It contains art from all over the world."</p>
                </div>
            </div>
        </div>
    )
}

export default StuffToDo
