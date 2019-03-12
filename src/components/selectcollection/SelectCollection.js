import React, { Component } from "react";
import './SelectCollection.css'

class SelectCollection extends Component {
  constructor() {
    super();
    this.state = {
      showSelectCollection: true,
      togleNewList: false,
      selectedOption: "",
      collections: [
        {
          label: "A",
          value: "A"
        },
        {
          label: "B",
          value: "B"
        }
      ]
    };
  }
  onChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.target.value });
  };

  createNewList = () => {
    this.setState({ togleNewList: true });
  };

  onAccept = () => {
    if(this.state.selectedOption !== '') {
      this.setState({ showSelectCollection: false });
      console.log(this.state.selectedOption)
    }

  };

  onCancel = () => {
    this.setState({ showSelectCollection: false });
  };

  render() {
    const selectOptions = this.state.collections.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ));
    const { selectedOption, togleNewList } = this.state;
    

    const menuCollection = (
      <form onSubmit={this.onAccept}>
        {!togleNewList && (
          <div>
            <h4 onClick={this.createNewList}>Create new collection</h4>
            <div className="form-group">
              <label>Select Collection</label>
              <select
                className="form-control form-control-lg"
                value={selectedOption}
                onChange={this.onChange}
              >
                {selectOptions}
              </select>
            </div>
          </div>
        )}
        {togleNewList && (
          <input
            onChange={this.onChange}
            type="text"
            className="form-control"
            placeholder="Create new list"
          />
        )}
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
      </form>
    );

    return <div className="selectCollection">{this.state.showSelectCollection ? menuCollection : null}</div>;
  }
}

export default SelectCollection;
