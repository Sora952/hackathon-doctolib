const Prescriptions = [
  {
    id: 1,
    patient: {
      firstname: "Roger",
      lastname: "Dupont",
      age: "56",
      email: "d.roger@mail.fr",
      phoneNumber: "+33456789123",
    },
    drugs: [
      {
        id: 1,
        drug: "Doliprane",
        dose: "1000 mg",
        dosage: "1",
        method: "pill(s)",
        frequencyPerDay: 2,
        hours: [10, 20],
        is_taken: false,
      },
      {
        id: 2,
        drug: "Toplexil",
        dose: "0,33 mg/mL",
        dosage: "1",
        method: "dose(s)",
        frequencyPerDay: 1,
        hours: [20],
        is_taken: false,
      },
      {
        id: 3,
        drug: "Lexomil",
        dose: "6 mg",
        dosage: "1",
        method: "pill(s)",
        frequencyPerDay: 1,
        hours: [20],
        is_taken: false,
      },
      {
        id: 4,
        drug: "Imodium",
        dose: "1,86 mg/pill",
        dosage: "1",
        method: "pill(s)",
        frequencyPerDay: 1,
        hours: [8, 10, 12, 14, 16, 18, 20],
        is_taken: false,
      },
    ],
    measure: {
      id: 7,
      type: "Test de glycémie",
      testValue: "",
      frequencyPerDay: 2,
    },
  },
];

export default Prescriptions;
