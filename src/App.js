import React from "react"
import './App.scss'
import Navbar from './components/Navbar';
import Aboutpage from "./pages/aboutpage";
import Homepage from './pages/homepage';
import {Route,Switch} from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Blogs from './pages/blogs';
import Contactpage from './pages/contactpage';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
       <div className="sidebar">
         <Navbar/>
       </div>
       <div className="main-content">
         <div className="content">
          <Switch>
            <Route path="/" exact><Homepage/></Route>
            <Route path="/about" exact><Aboutpage/></Route>
            <Route path="/skills" exact><Skills/></Route>
            <Route path="/portfolio" exact><Portfolio/></Route>
            <Route path="/blogs" exact><Blogs/></Route>
            <Route path="/contact" exact><Contactpage/></Route>
          </Switch>
         </div>
       </div>
    </div>
  );
}

export default App;
