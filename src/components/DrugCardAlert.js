import React from "react";
// import moment from "moment";
import "../styles/CardAlert.css";

const DrugCardAlert = ({ alert, deletedDrugs }) => {
  const drugs = alert;
  console.log(drugs);
  const prescriptionDate = drugs.hours;
  return (
    <div className="CardAlert">
      <ul className="globalAlerts">
        {drugs.map((oneDrug) => (
          <div key={oneDrug.id}>
            <li className="list-alert">
              <div className="HeaderCard">
                <h3>{oneDrug.drug}</h3>
                <h3>
                  {oneDrug.dosage} {oneDrug.method}
                </h3>
              </div>
              {/* <div className="timeRemaining">
                <p>
                  {moment().endOf(prescriptionDate).fromNow()} h left before
                  taking it.
                </p>
              </div> */}
              <div className="card-button">
                <button className="first" type="button">
                  Don't take
                </button>
                <button className="second" type="button">
                  Remind me
                </button>
                <button
                  className="third"
                  type="button"
                  onClick={() => deletedDrugs(oneDrug.id)}
                >
                  Done
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DrugCardAlert;
