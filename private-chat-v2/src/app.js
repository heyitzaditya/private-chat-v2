import { db } from "./firebase.js";

console.log("Private Chat V2 Started 🚀");

const APP = {

    version: "2.0",

    currentUser: null,

    currentRoom: null

};

window.APP = APP;

init();

function init() {

    createUserId();

    console.log("App Initialized");

}

function createUserId() {

    let userId = localStorage.getItem("pc_user_id");

    if (!userId) {

        userId = crypto.randomUUID();

        localStorage.setItem("pc_user_id", userId);

    }

    APP.currentUser = {

        id: userId,

        name: ""

    };

    console.log("User ID:", userId);

}
