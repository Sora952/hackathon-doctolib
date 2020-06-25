import React from "react"; //, {useState}
import Prescriptions from "../test/test";
import DrugCardAlert from "./DrugCardAlert";
import "../styles/CardAlert.css";

const AlertList = () => {
  // const [drugs, setDrug] = useState([]);

  // setDrug(Prescriptions[0].drugs);

  const drugs = Prescriptions[0].drugs;

  const takeMedicament = (id) => {
    console.log(id);
    const filteredDrugs = drugs.filter((oneDrug) => oneDrug.id !== id);
    // setDrug(filteredDrugs);
    return filteredDrugs;
  };

  return (
    <div>
      <h2>Medication alert</h2>
      <div>
        <DrugCardAlert alert={drugs} deletedDrugs={takeMedicament} />
      </div>
    </div>
  );
};

export default AlertList;
