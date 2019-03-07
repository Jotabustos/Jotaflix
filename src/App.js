import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Showcase from "./components/showcase/Showcase";
import Navbar from './components/layout/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import Discover from './components/discover/Discover';
import Upcoming from './components/upcoming/Upcoming';
import Search from './components/search/Search';


class App extends Component {
  render() {
    return (
      <Router>
       
        <div className="App">
          <Navbar />
          <Searchbar />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail/:id" component={Showcase} />
        </div>
      </Router>
    );
  }
}

export default App;
