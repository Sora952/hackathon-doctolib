import React from "react";
import "../styles/Medication_hard.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddButton from "../components/addButton";

library.add(faTrash);

function Medication () {
  // HERE YOU HAVE TO CHANGE THE DRUG NAMES
  const medications = ['Imodium','Chartreuse Verte', 'Smarties'];
  //
    return (
      <div>
        <body>
          <div className='list'>
            <p>
              <input
                type="text"
                id="1"
                value={medications[0]}
              />
              <span>
                <FontAwesomeIcon
                  className="faicons"
                  icon="trash"
                />
              </span>
            </p>
          </div>

          <div className='list'>
            <p>
              <input
                type="text"
                id="1"
                value={medications[1]}
              />
              <span>
                <FontAwesomeIcon
                  className="faicons"
                  icon="trash"
                />
              </span>
            </p>
          </div>

          <div className='list'>
            <p>
              <input
                type="text"
                id="1"
                value={medications[2]}
              />
              <span>
                <FontAwesomeIcon
                  className="faicons"
                  icon="trash"
                />
              </span>
            </p>
          </div>

          <form id="to-do-form">
            <input
              type="text"
              placeholder="Enter medication"
              value=""
            />
          </form>
        </body>
        <AddButton type="submit" />
      </div>
    );
}

export default Medication;
