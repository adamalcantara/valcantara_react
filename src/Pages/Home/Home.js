import React from 'react'
import "./Home.css"

import HomeImage from "../../Assets/img/hollywood.jpg"

const Home = () => {
    return (
        <div id="homePage">
            {/* <div id="video">
                <iframe id="engagementVideo" src="https://www.youtube.com/embed/Ewez_nEhT2w?controls=0&autoplay=1&loop=1&playlist=Ewez_nEhT2w" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div> */}
            <div id="mobileHeader">
                <h1 id="homeHeader">Valerie &amp; Adam</h1>
                <h2 id="homeSubHeader">March 12th, 2022</h2>
            </div>
            <div id="coverPhoto">
             <img src={HomeImage} id="homeImg"></img>
            </div>

            <div id="theWeddingInfo">
                <div id="weddingInfoLeft">
                    <p id="theWeddingDate">Saturday, the Twelfth of March</p>
                    <p id="theWeddingTime">Half Past Four In The Afternoon</p>
                </div>
                <div id="weddingInfoRight">
                    <p className="theWeddingInvite"><span id="CCD">The Country Club of Detroit</span>
                        <br></br>
                        220 Country Club Drive
                        <br></br>
                        Grosse Pointe Farms, Michigan 48236
                        <p>Reception To Follow
                            <br></br>
                            Attire: Black Tie</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
