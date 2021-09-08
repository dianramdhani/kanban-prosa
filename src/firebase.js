import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyBGGgWZj0PwvFaD_NIoYhDacTqc625ctuI",
    authDomain: "test-3d286.firebaseapp.com",
    projectId: "test-3d286",
    storageBucket: "test-3d286.appspot.com",
    messagingSenderId: "568668437637",
    appId: "1:568668437637:web:e614ffdbb7c249d6fafdec",
    measurementId: "G-DW2WFQRDXJ"
};

const app = initializeApp(config);
const db = getFirestore(app);

export default db;