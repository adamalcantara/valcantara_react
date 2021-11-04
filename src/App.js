
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

// import Pages
import OurStory from "./Pages/OurStory/OurStory"
import Travel from "./Pages/Travel/Travel"
import StuffToDo from "./Pages/StuffToDo/StuffToDo"
import WeddingParty from './Pages/WeddingParty/WeddingParty';

function App() {
  return (
    <div className="App">
      <Router>
        <h2 id="names">Valerie &amp; Adam</h2>
        <h4 id="date">March 12, 2022 · Grosse Pointe, MI</h4>
       <Navbar />
       <div className="pageContent">
         <Route exact path="/story" component={OurStory} />
         <Route exact path="/party" component={WeddingParty} />
         <Route exact path="/travel" component={Travel} />
         <Route exact path="/thingstodo" component={StuffToDo} />
       </div>
       </Router>
    </div>
  );
}

export default App;
