import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//Seed database

//Config
const config = {
  apiKey: "AIzaSyDIxlr8UbOJX5faP715NiuFpe7MErk_PP0",
  authDomain: "netflix-concept-861dc.firebaseapp.com",
  projectId: "netflix-concept-861dc",
  storageBucket: "netflix-concept-861dc.appspot.com",
  messagingSenderId: "214003365217",
  appId: "1:214003365217:web:efc8cc1c43808960df4120",
};

const firebase = Firebase.initializeApp(config);

//ONLY RUN THIS ONCE (by saving or refreshing your localhost)
//seedDatabase(firebase);

export { firebase };
