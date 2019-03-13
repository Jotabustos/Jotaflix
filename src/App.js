import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import Discover from "./components/discover/Discover";
import Upcoming from "./components/upcoming/Upcoming";
import Search from "./components/search/Search";
import Detail from "./components/detail/Detail";
import Favs from "./components/favs/Favs";
import SelectCollection from "./components/selectcollection/SelectCollection";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Searchbar />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/upcoming" component={Upcoming} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/favs" component={Favs} />
            <Route exact path="/select" component={SelectCollection} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
