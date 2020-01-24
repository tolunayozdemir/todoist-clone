import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCmBthI6PDyDYnQFzS3Xh6H3DPekhs4trc",
  authDomain: "todoist-71c2c.firebaseapp.com",
  databaseURL: "https://todoist-71c2c.firebaseio.com",
  projectId: "todoist-71c2c",
  storageBucket: "todoist-71c2c.appspot.com",
  messagingSenderId: "618354346474",
  appId: "1:618354346474:web:a5247533057c69548f8a93"
});

export { firebaseConfig as firebase };
