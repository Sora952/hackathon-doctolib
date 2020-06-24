import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyD4TpfZuZGX52he5xPinF2ix6MvYrDhMHE",
  authDomain: "hackathon-doctolib.firebaseapp.com",
  databaseURL: "https://hackathon-doctolib.firebaseio.com",
  projectId: "hackathon-doctolib",
  storageBucket: "hackathon-doctolib.appspot.com",
  messagingSenderId: "939555623923",
  appId: "1:939555623923:web:d241f324f49ff3ae37f886",
  measurementId: "G-TE29ERW19X",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }

    return this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .set({
        quote,
      });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .get();
    return quote.get("quote");
  }
}

export default new Firebase();
