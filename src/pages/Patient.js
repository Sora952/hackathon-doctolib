import React, { Component } from "react";
import AlertList from "../components/AlertList";
import ButtonList from "../components/ButtonList";

class Patient extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>
            {this.props.Firstname} {this.props.Lastname}
          </h1>
          <AlertList />
          <ButtonList />
        </main>
      </div>
    );
  }
}

export default Patient;
