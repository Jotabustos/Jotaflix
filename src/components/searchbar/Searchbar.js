import React, { Component } from "react";
import { withRouter } from "react-router";
import "./Searchbar.css";

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      console.log("value", e.target.value);
      this.props.history.push({
        pathname: "/search",
        state: { searchText: e.target.value }
      });
    }
  };
  render() {
    return (
      <div className="search">
        <div className="submedia">
          <div className="search_form">
            <input
              className="form-control form-control-lg"
              placeholder="Search for a movie, tv show, person..."
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              onKeyDown={this.keyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Searchbar);
