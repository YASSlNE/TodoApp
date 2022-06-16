// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqpHZcALPd2Nz03N5Fk49Laaf6N8pKlho",
  authDomain: "todoapp-770e3.firebaseapp.com",
  projectId: "todoapp-770e3",
  storageBucket: "todoapp-770e3.appspot.com",
  messagingSenderId: "415512502648",
  appId: "1:415512502648:web:e27ae063fe0e9e6beca88d",
  measurementId: "G-5JKX01332J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const Firebase = initializeApp(firebaseConfig);
export default app;