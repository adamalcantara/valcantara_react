import React from 'react'

import "./OurStory.css"

// Import images
import Runaway from "../../Assets/img/story/1.JPG";
import FirstDate from "../../Assets/img/story/2.jpeg";

const OurStory = () => {
    return (
        <div>
            <h1 id="storyHeader">Our Story</h1>

            <div id="storySection">
                <div id="timeline">
                    <ul className="sessions">
                        <li>
                            <div className="date">August 2018</div>
                            <p>First Met</p>
                        </li>
                        <li>
                            <div className="date">November 2018</div>
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
            </div>
        </div>
    )
}

export default OurStory
