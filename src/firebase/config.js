import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWXwmMfJSNPPMbWk6J0qCb72UoV7bWuEM",
    authDomain: "pilot-vue-project.firebaseapp.com",
    projectId: "pilot-vue-project",
    storageBucket: "pilot-vue-project.appspot.com",
    messagingSenderId: "637177796029",
    appId: "1:637177796029:web:23dd1e3fba9afbe3286ed4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
