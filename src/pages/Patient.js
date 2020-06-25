import React, { Component } from "react";
import AlertList from "../components/AlertList";

class Patient extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>
            {this.props.Firstname} {this.props.Lastname}
          </h1>
          <AlertList />
        </main>
      </div>
    );
  }
}

export default Patient;
