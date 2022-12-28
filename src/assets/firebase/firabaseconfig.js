import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push } from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { ref, set, update, remove, child } from 'firebase/database'
import 'firebase/storage';
import Swal from "sweetalert2";
import { setCookie } from "../defFunction/defFunction";

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

const postStudent = (data) => {
    const db = getDatabase();
    const userId = push(child(ref(db), 'students')).key;
    let actualData = data;
    actualData.userId = userId;
    set(ref(db, 'students/' + userId), actualData);
    console.log(actualData)
}

const deleteStudent = (id) => {
    remove(ref(db, `students/${id}`));
}

const updateStudent = (data, studentId) => {
    update(ref(db, 'students/' + studentId), data);
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Успешно изменено',
        showConfirmButton: false,
        timer: 2000
    })
}

const getStudents = (setState, setState2) => {
    const dbRef = ref(db, 'students/');
    // const qq = query(ref(db, 'students/'), orderByChild('group'))
    // onValue(qq, (s) => {
    //     console.log(s.val())
    // })
    onValue(dbRef, (snapshot) => {
        setState(Object.values(snapshot.val()))
        setState2(Object.values(snapshot.val()))
    })
}

const getStudent = (setState, id, setRadio) => {
    const dbRef = ref(db, 'students/' + id);

    onValue(dbRef, (snapshot) => {
        setState(snapshot.val())
        // setRadio(snapshot.val().group)
    })
}

export { auth, authes, getDatabaseDefFunc, getStudent, postStudent, deleteStudent, updateStudent, getStudents }
export default app;
/*setRadio(snapshot.val().group)*/