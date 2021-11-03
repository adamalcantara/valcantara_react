
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Travel from "./Pages/Travel/Travel"

function App() {
  return (
    <div className="App">
      <Router>
        <h2 id="names">Valerie &amp; Adam</h2>
        <h4 id="date">March 12, 2022 · Grosse Pointe, MI</h4>
       <Navbar />
       <div className="pageContent">
         <Route exact path="/travel" component={Travel} />
       </div>
       </Router>
    </div>
  );
}

export default App;
