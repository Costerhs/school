import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push } from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { setCookie } from "./firebaseFunctions";
import { ref, set, update, remove, child } from 'firebase/database'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCr8362HODkkrA7DzYSGtUWFN_MoSKDjiQ",
    authDomain: "school-58ca5.firebaseapp.com",
    projectId: "school-58ca5",
    storageBucket: "school-58ca5.appspot.com",
    messagingSenderId: "276600010715",
    appId: "1:276600010715:web:90030db685eaef65b419fe",
    measurementId: "G-BCFLB01XL0"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const db = getDatabase();
const auth = getAuth(app);

const getDatabaseDefFunc = () => {
    return getDatabase(app);
}
const authes = async () => {
    await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setCookie(user.displayName)
        })
}

const postStudent = (image, firstname, lastname, age, group, classes) => {
    const db = getDatabase();
    const userId = push(child(ref(db), 'students')).key;
    set(ref(db, 'students/' + userId), {
        firstname: firstname,
        lastname: lastname,
        group: group,
        classes: classes,
        age: age,
        image: image,
        userId: userId
    });
}

const deleteStudent = (id) => {
    remove(ref(db, `students/${id}`));
}

const updateStudent = (image, firstname, lastname, age, group, classes, id) => {
    update(ref(db, 'students/' + id), {
        firstname: firstname,
        lastname: lastname,
        group: group,
        classes: classes,
        age: age,
        image: image,
    });
}

const getStudents = (setState) => {
    const dbRef = ref(db, 'students/');

    onValue(dbRef, (snapshot) => {
        setState(Object.values(snapshot.val()))
    })
}

export { auth, authes, getDatabaseDefFunc, postStudent, deleteStudent, updateStudent, getStudents }
export default app;