import React from "react";
import "../styles/CardAlert.css";

const DrugCardAlert = ({ alert, deletedDrugs }) => {
  return (
    <div className="CardAlert">
      <ul className="globalAlerts">
        {alert.map((oneDrug) => (
          <div key={oneDrug.id}>
            <li className="list-alert">
              <div className="HeaderCard">
                <h3>{oneDrug.drug}</h3>
                <h3>
                  {oneDrug.dosage} {oneDrug.method}
                </h3>
              </div>
              <div className="timeRemaining">
                <p>Scheduled for 8:00 AM, today, June 26</p>
              </div>
              <div className="card-button">
                <button className="first" type="button">
                  Ignore
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
