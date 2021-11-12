import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div id="weddingInfo">
                <div id="inviteHeader">
                    <p id="weddingDate">March 12, 2022</p>
                    <p className="weddingInvite">The Country Club of Detroit
                        <br></br>
                        220 Country Club Drive, Grosse Pointe Farms, Michigan 48236
                        <br></br>
                        Attire: Black Tie
                    </p>
                </div>
                <div id="time">
                    <p className="weddingInvite">Half Past Four In The Afternoon</p>
                </div>
                <div>
                    <p className="weddingInvite">Reception To Follow</p>
                </div>
            </div>
        </div>
    )
}

export default Home
