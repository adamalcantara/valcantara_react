import React from 'react'

import "./OurStory.css"

// Import images
import Ring from "../../Assets/img/story/ring.jpg"
import Runaway from "../../Assets/img/story/runaway.JPG";
import FirstDate from "../../Assets/img/story/firstdate.jpg";
import Proposal from "../../Assets/img/story/proposal.jpg"
import Disneyland from "../../Assets/img/story/disneyland.jpg"
import YachtClub from "../../Assets/img/story/yachtclub.jpg"


const OurStory = () => {
    return (
        <div id="storySection">
            <h1 id="storyHeader">Our Story</h1>

            <div id="storyContent">
                <div id="timeline">
                    <ul className="sessions">
                        <li>
                            <div className="date">August 2018</div>
                            <p>First Met</p>
                        </li>
                        <li>
                            <div className="date">January 2019</div>
                            <p>First Worked Together</p>
                        </li>
                        <li>
                            <div className="date">February 2020</div>
                            <p>Started Hanging Out Outside Work</p>
                        </li>
                        <li>
                            <div className="date">March 2020</div>
                            <p>First Date</p>
                        </li>
                        <li>
                            <div className="date">August 2021</div>
                            <p>Got Engaged</p>
                        </li>
                    </ul>
                </div>
                <img src={Ring} id="ringPhoto" alt="ring image"></img>
            </div>

            <div id="imageGrid">
                <div className="imageGridItem">
                    <img src={Runaway} alt="" className="gridImage"></img>
                </div>
                <div className="imageGridItem">
                    <img src={FirstDate} alt="" className="gridImage"></img>
                </div>
                <div className="imageGridItem">
                    <img src={Proposal} alt="Proposal" className="gridImage"></img>
                </div>
                <div className="imageGridItem">
                    <img src={Disneyland} alt="Disneyland" className="gridImage"></img>
                </div>
                <div className="imageGridItem">
                    <img src={YachtClub} alt="YachtClub" className="gridImage"></img>
                </div>
            </div>
        </div>
    )
}

export default OurStory
