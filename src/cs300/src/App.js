import './App.css';
import {Route, Link} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Category from "./Category";
import Navbar  from './Navbar';
import Aboutus from './Aboutus';
import Account from "./Account";
import Navbar2 from "./Navbar2";
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
        {path !== '/' && path !=='/Home' &&  path !=='/Account' &&
          <div>
            <Navbar2 />
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
