import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-JRDrG1mjeJLv-cyAybaznwWGja2QLS8",
    authDomain: "bprodev-d66f7.firebaseapp.com",
    projectId: "bprodev-d66f7",
    storageBucket: "bprodev-d66f7.appspot.com",
    messagingSenderId: "798343121097",
    appId: "1:798343121097:web:d5211529d7812bdbb92518"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export {db,storage,auth}


