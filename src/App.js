
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"

// import Pages
import Travel from "./Pages/Travel/Travel"
import StuffToDo from "./Pages/StuffToDo/StuffToDo"

function App() {
  return (
    <div className="App">
      <Router>
        <h2 id="names">Valerie &amp; Adam</h2>
        <h4 id="date">March 12, 2022 · Grosse Pointe, MI</h4>
       <Navbar />
       <div className="pageContent">
         <Route exact path="/travel" component={Travel} />
         <Route exact path="/attractions" component={StuffToDo} />
       </div>
       </Router>
    </div>
  );
}

export default App;
