import './App.css';
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Footer from './component/Footer';
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Menu from"./pages/Menu.js"
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
