import Nav from "./Components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;
