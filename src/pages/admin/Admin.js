import React, { useState } from 'react'
import './style.scss'
import ModalForm from "../../component/form/ModalForm";
import Student from '../students/Student';
import { postStudent } from '../../assets/firebase/firabaseconfig';

const Admin = () => {
    const [isModal, setIsModal] = useState(false);
    const [isAllStudent, setIsAllStudent] = useState(false);

    return (
        <div className='admin'>
            {isModal && <ModalForm closeFunc={setIsModal} />}
            <div className="container">
                <div className="admin__btns">
                    <button className="admin__post" onClick={() => setIsModal(true)}>Дбавить ученика</button>
                    <button className="admin__show" onClick={() => setIsAllStudent(el => !el)}>{isAllStudent ? 'Скрыть' : "Все ученики"}</button>
                </div>
                {isAllStudent && <Student isAdmin />}
            </div>
        </div>
    )
}

export default Admin