import React, { PureComponent } from "react";

class InputForm extends PureComponent {
  state = {
    city: "",
    query: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="inputContainer">
        <form onSubmit={this.handleSubmit} id="form">
            <label>Category</label>
          <input
            id="inputQuery"
            placeholder="Search for.."
            onChange={this.handleChange}
            name="query"
            value={this.state.query || ""}
          />
            <label>City</label>
          <input
            id="inputCity"
            placeholder="My Location.."
            onChange={this.handleChange}
            name="city"
            value={this.state.city || ""}
          />

          <button type="submit" id="searchButton">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
