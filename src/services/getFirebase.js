import  firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUOth8ahBg-TpQwtyftar2R975i3CG6ME",
    authDomain: "novaropa-45865.firebaseapp.com",
    projectId: "novaropa-45865",
    storageBucket: "novaropa-45865.appspot.com",
    messagingSenderId: "811169704131",
    appId: "1:811169704131:web:28e1650b28ccdaaf129a76"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app);
}