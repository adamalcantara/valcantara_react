import React from 'react'

import "./WeddingParty.css"

// Import images
import Monica from "../../Assets/img/party/monica.jpg";
import Robert from "../../Assets/img/party/robert.jpg";
import Nathan from "../../Assets/img/party/nathan.jpg";
import Jill from "../../Assets/img/party/jill.jpg"

const WeddingParty = () => {
    return (
        <div id="partyPage">
            <h1 id="weddingPartyHeader">Wedding Party</h1>
            <div id="weddingPartySection">

                <div className="partyMember">
                    <h3 className="partyName">Monica Pierson</h3>
                    <img src={Monica} className="partyImage" alt="Monica"></img>
                    {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                    <ul className="weddingParty">
                        <li className="partyList">Valerie's Sister</li>
                        <li className="partyList">Favorite song: September</li>
                    </ul>
                </div>

                <div className="partyMember">
                    <h3 className="partyName">Robert Alcantara</h3>
                    <img src={Robert} className="partyImage" alt="Robert"></img>
                    {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                    <ul className="weddingParty">
                        <li className="partyList">Adam's Brother</li>
                        <li className="partyList">Favorite song: September</li>
                    </ul>
                </div>

                <div className="partyMember">
                    <h3 className="partyName">Jill Pierson</h3>
                    <img src={Jill} className="partyImage" alt="Jill"></img>
                    {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                    <ul className="weddingParty">
                        <li className="partyList">Valerie's Sister</li>
                        <li className="partyList">Favorite song: September</li>
                    </ul>
                </div>

                <div className="partyMember">
                    <h3 className="partyName">Nathan Alcantara</h3>
                    <img src={Nathan} className="partyImage" alt="Nathan"></img>
                    {/* <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> */}
                    <ul className="weddingParty">
                        <li className="partyList">Adam's Brother</li>
                        <li className="partyList">Favorite song: September</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default WeddingParty
