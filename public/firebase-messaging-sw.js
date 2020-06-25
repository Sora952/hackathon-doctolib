importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD4TpfZuZGX52he5xPinF2ix6MvYrDhMHE",
  authDomain: "hackathon-doctolib.firebaseapp.com",
  databaseURL: "https://hackathon-doctolib.firebaseio.com",
  projectId: "hackathon-doctolib",
  storageBucket: "hackathon-doctolib.appspot.com",
  messagingSenderId: "939555623923",
  appId: "1:939555623923:web:d241f324f49ff3ae37f886",
  measurementId: "G-TE29ERW19X",
});

const messaging = firebase.messaging();

self.addEventListener("notificationclick", function (event) {
  console.log("clicked on notif", JSON.stringify(event));
});
