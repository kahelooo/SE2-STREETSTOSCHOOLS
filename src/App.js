import logo from './logo.svg';
//import './App.css';
import './blog.css';
import About from './about';
import Blog from './blog';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    
      <Router>
        <div >
      {/* <Link exact to="/">Home</Link> */}
      {/* <NavLink exact activeClassName="active" to="/blog"> Home Navlink</NavLink> */}
   

      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>


      </Switch>
    </div>
    </Router>
  );
}

export default App;
