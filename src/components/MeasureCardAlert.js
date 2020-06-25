import React from "react";
import moment from "moment";
import "../styles/CardAlert.css";

const MeasureCardAlert = (props) => {
  const measure = props.alert.measure;
  // const prescriptionDate = props.prescriptionDate;
  // {/*moment().endOf({prescriptionDate}).fromNow()*/}

  const now = moment();
  const prescriptionDate = moment().add(5, "hours");
  const getTimeLeft = () => {
    moment.duration(prescriptionDate.diff(now)).asHours();
  };
  console.log(getTimeLeft);

  return (
    <div className="CardAlert">
      <div className="HeaderCard">
        <h3>{measure.type}</h3>
        <h3>{measure.testValue}</h3>
      </div>
      <div className="timeRemaining">
        <p>Mesure à effectuer dans {getTimeLeft} h.</p>
      </div>
      <div className="card-button">
        <button type="button" onClick="" onSubmit="">
          Refuser
        </button>
        <button type="button" onClick="" onSubmit="">
          Rappel
        </button>
        <button type="button" onClick="" onSubmit="">
          Prendre
        </button>
      </div>
    </div>
  );
};

export default MeasureCardAlert;
