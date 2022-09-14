import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//we need to seed the database

//we need a config here
const config = {
  apiKey: "AIzaSyD0V6lJtxuDYc4ZQYL1BdjtS4ORvtI7gTs",
  authDomain: "netflix-fe623.firebaseapp.com",
  projectId: "netflix-fe623",
  storageBucket: "netflix-fe623.appspot.com",
  messagingSenderId: "390288187264",
  appId: "1:390288187264:web:bac722a421c142ef622b65",
};

const firebase = initializeApp(config);

seedDatabase(firebase);

export { firebase };
