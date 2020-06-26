import React, { Component } from "react";
import AlertList from "../components/AlertList";
import ButtonList from "../components/ButtonListP";

class PatientP extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>
            {this.props.firstname} {this.props.lastname}
          </h1>
          <AlertList />
          <ButtonList />
        </main>
      </div>
    );
  }
}

export default PatientP;
