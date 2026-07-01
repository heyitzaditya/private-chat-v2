import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzFxRn51HYQADNnO-44jtpKjaoqfDbpsE",
    authDomain: "privatechat-200f1.firebaseapp.com",
    projectId: "privatechat-200f1",
    storageBucket: "privatechat-200f1.firebasestorage.app",
    messagingSenderId: "26721616197",
    appId: "1:26721616197:web:d582f35bf112b11a09fe2c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, serverTimestamp };
