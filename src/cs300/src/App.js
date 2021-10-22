import './App.css';
import {Route, Link} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar  from './Navbar';
import Aboutus from './Aboutus';
import Account from "./Account";

function App() {
  const path = window.location.pathname;

  return (
    <div>
      <Route exact path="/" exact component={Login} />
        {path !== '/' &&
          <div>
            <Navbar />
          </div>
        }
    <Route exact path="/Home" component={Home} />
    <Route exact path="/Category" component={Category} />
    <Route exact path="/Aboutus" component={Aboutus} />
    <Route exact path="/Account" component={Account} />
    </div>
  );
}

export default App;
