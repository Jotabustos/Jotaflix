import React, { Component } from "react";
import './SelectCollection.css'

class SelectCollection extends Component {
  constructor() {
    super();
    this.state = {
      showSelectCollection: false,
      selectedOption: ""
    };
  }
  onChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.target.value });
  };

  onAccept = () => {
    if(this.state.selectedOption !== ''){;
      this.props.onAcceptClick(this.state.selectedOption);
    }
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.onAccept();
    }
  };

  onCancel = () => {
    this.props.onCancelClick();
  };

  componentWillReceiveProps(nextProps){
    if (nextProps.showSelectCollection){
      this.setState({showSelectCollection: true})
    }
  }

  render() {
    const menuCollection = (
      <>
        <input
          onChange={this.onChange}
          type="text"
          className="form-control searchbar inputcollection"
          placeholder="Add to collection..."
          onKeyDown={this.keyPress}
        />
        <div className="buttonscollection">
          <button
            type="button"
            onClick={this.onAccept}
            className="btn btn-success"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={this.onCancel}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </>
    );

    return <div className="selectCollection">{menuCollection}</div>;
  }
}

export default SelectCollection;
