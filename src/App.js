
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

// import Pages
import Home from "./Pages/Home/Home"
import OurStory from "./Pages/OurStory/OurStory"
import Travel from "./Pages/Travel/Travel"
import StuffToDo from "./Pages/StuffToDo/StuffToDo"
import WeddingParty from './Pages/WeddingParty/WeddingParty';
import Footer from './Components/Footer/Footer'
import Registry from './Pages/Registry/Registry'
import RSVP from './Pages/RSVP/RSVP'

import Logo from "./Assets/img/logo2.png"
import Flowers from "./Assets/img/flowers.png"
import FlowersFooter from "./Assets/img/flowersFooter.png"

function App() {
  return (
    <div className="App">
      <Router>
        <img src={Flowers} alt="Flower decoration" id="flowerImage"></img>
        <div id="topSection">
        {/* <h2 id="names">Valerie &amp; Adam</h2> */}
        <img src={Logo} alt="Wedding Logo" id="weddingLogo"></img>
        <h4 id="date">March 12, 2022 · Grosse Pointe, MI</h4>
        </div>
       <Navbar />
       <div className="pageContent">
         <Route exact path="/" component={Home} />
         <Route exact path="/story" component={OurStory} />
         <Route exact path="/party" component={WeddingParty} />
         <Route exact path="/travel" component={Travel} />
         <Route exact path="/thingstodo" component={StuffToDo} />
         <Route exact path="/registry" component={Registry} />
         <Route exact path="/rsvp" component={RSVP} />
       </div>
       {/* <img src={FlowersFooter} alt="Flower decoration" id="flowerImageFooter"></img> */}
       <Footer />
       
       </Router>
    </div>
  );
}

export default App;
