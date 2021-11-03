
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <h2 id="names">Adam &amp; Valerie</h2>
        <h4 id="date">March 12, 2022 · Grosse Pointe, MI</h4>
       <Navbar />
       </Router>
    </div>
  );
}

export default App;
