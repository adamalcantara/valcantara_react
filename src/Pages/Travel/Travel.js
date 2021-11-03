import React from 'react'
import MotorCity from "../../Assets/img/travel/motorcity.jpg"
import HolidayInn from "../../Assets/img/travel/holidayinn.jpg"
import RenCen from "../../Assets/img/travel/rencen.jpg"

import "./Travel.css"

const Travel = () => {
    return (
        <div>
            <div id="accommodations">
                <p>For accommodations in Grosse Pointe, we suggest Airbnb. If you prefer hotels, here are some recommendations for hotels around
                    Grosse Pointe.</p>
                <div id="hotels">
                    <div className="hotelcard" id="motorcitycard">
                        <img src={MotorCity} alt="MotorCity Casino Hotel" className="hotelimg"></img>

                        <a href="https://www.motorcitycasino.com/default.aspx"><h3>MotorCity Casino Hotel</h3></a>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="hotelcard" id="motorcitycard">
                        <img src={HolidayInn} alt="Detroit Hilton" className="hotelimg"></img>
                        <a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/troy/dttom/hoteldetail"><h3>Holiday Inn Express &amp; Suites Detroit North</h3></a>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="hotelcard" id="motorcitycard">
                        <img src={RenCen} alt="Detroit Renaissance Center" className="hotelimg"></img>
                        <a href="https://www.marriott.com/hotels/travel/dtwdt-detroit-marriott-at-the-renaissance-center/"><h3>Detroit Marriott at the Renaissance Center</h3></a>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Travel
