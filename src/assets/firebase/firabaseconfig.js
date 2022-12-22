import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { setCookie } from "./firebaseFunctions";

const firebaseConfig = {
    apiKey: "AIzaSyCr8362HODkkrA7DzYSGtUWFN_MoSKDjiQ",
    authDomain: "school-58ca5.firebaseapp.com",
    projectId: "school-58ca5",
    storageBucket: "school-58ca5.appspot.com",
    messagingSenderId: "276600010715",
    appId: "1:276600010715:web:90030db685eaef65b419fe",
    measurementId: "G-BCFLB01XL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);

export default app;
export const authes = async() => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setCookie(user.displayName)
        })
}

