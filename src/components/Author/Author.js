import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Author.css";
import { UPDATE_FIRST, UPDATE_LAST } from "../../store";
import store from "../../store";

class Author extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      authorFirst: reduxState.authFirst,
      authorLast: reduxState.authLast,
    };
  }
  handleAuthorFirstChange(nameVal) {
    this.setState({
      authorFirst: nameVal,
    });
  }
  handleAuthorLastChange(nameVal) {
    this.setState({
      authorLast: nameVal,
    });
  }
  saveChanges() {
    store.dispatch({ type: UPDATE_FIRST, payload: this.state.authorFirst });
    store.dispatch({ type: UPDATE_LAST, payload: this.state.authorLast });
  }
  render() {
    return (
      <div className="Author forms">
        <div className="input_container">
          <h2>Author First Name:</h2>
          <input
            value={this.state.authorFirst}
            onChange={(e) => this.handleAuthorFirstChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Author Last Name:</h2>
          <input
            value={this.state.authorLast}
            onChange={(e) => this.handleAuthorLastChange(e.target.value)}
          />
        </div>
        <Link to="/add/name">
          <button onClick={() => this.saveChanges()} className="left_button">
            Previous
          </button>
        </Link>
        <Link to="/add/ingredients">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Author;
