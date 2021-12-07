import React from 'react'

import "./Travel.css"

import MotorCity from "../../Assets/img/travel/motorcity.jpg"
import HolidayInn from "../../Assets/img/travel/holidayinn.jpg"
import RenCen from "../../Assets/img/travel/rencen.jpg"
import DTW from "../../Assets/img/travel/dtw.jpg"
const Travel = () => {
    return (
        <div>
            <h2 id="travelHeader">Travel</h2>
            <div id="airTravel">
                <img src={DTW} id="dtwimg" alt="DTW airport"></img>
                <p id="airport">The airport closest to Grosse Pointe is Detroit Metropolitan Airport (DTW) which is located approximately 30 minutes from Grosse Pointe.
                    <br></br>
                    <br></br>
                    DTW is a Delta hub, and direct flights to and from most locations can be found on their airline.
                </p>
            </div>
            <div id="accommodations">
                <p id="forAccommodations">For accommodations in Grosse Pointe, we suggest <a href="https://www.airbnb.com/" target="_blank" rel="noreferrer" id="airbnb">Airbnb</a>. 
                <br></br>
                <br></br>
                If you prefer hotels, here are some recommendations for hotels around
                    Grosse Pointe:</p>
                <div id="hotels">
                    <div className="hotelcard" id="motorcitycard">
                        <img src={MotorCity} alt="MotorCity Casino Hotel" className="hotelimg"></img>

                        <a href="https://www.motorcitycasino.com/default.aspx" target="_blank" rel="noreferrer"><h3 className="hotelHeader">MotorCity Casino Hotel</h3></a>
                        {/* <p>"With world-class luxury hotel accommodations, spa facilities, fine dining, live performance venues, high-energy gaming and the city’s most exclusive ultra-lounge, you’ll find your kind of entertainment at the new MotorCity Casino Hotel."</p> */}
                        <ul className="hotelList">
                            <li>30 minutes from Grosse Pointe</li>
                            <li>Average Price Per Night: $216</li>
                        </ul>
                    </div>
                    <div className="hotelcard" id="motorcitycard">
                        <img src={HolidayInn} alt="Detroit Hilton" className="hotelimg"></img>
                        <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/roseville/dttrv/hoteldetail" target="_blank" rel="noreferrer"><h3 className="hotelHeader">Holiday Inn Express &amp; Suites Detroit North</h3></a>

                        {/* <p>"New hotel in Roseville just minutes away from everything Metro Detroit has to offer!"</p> */}
                        <ul className="hotelList">
                            <li>20 minutes from Grosse Pointe</li>
                            <li>Average Price Per Night: $138</li>
                        </ul>
                    </div>
                    <div className="hotelcard" id="motorcitycard">
                        <img src={RenCen} alt="Detroit Renaissance Center" className="hotelimg"></img>
                        <a href="https://www.marriott.com/hotels/travel/dtwdt-detroit-marriott-at-the-renaissance-center/" target="_blank" rel="noreferrer"><h3 className="hotelHeader">Detroit Marriott at the Renaissance Center</h3></a>
                        {/* <p>"Soaring 73 floors above the Detroit River in downtown Detroit, Michigan, Detroit Marriott at the Renaissance Center is ideally situated on the RiverWalk and next to Hart Plaza."</p> */}
                        <ul className="hotelList">
                            <li>30 minutes from Grosse Pointe</li>
                            <li>Average Price Per Night: $220</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel
