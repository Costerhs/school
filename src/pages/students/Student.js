import { useEffect, useState } from 'react'
import { getStudents } from '../../assets/firebase/firabaseconfig'
import ModalForm from '../../component/form/ModalForm'
import Card from './card/Card'
import './style.scss'
import FilterBlock from './filter/FilterBlock'

const Student = ({ isAdmin, isHome }) => {
    const [allStudents, setAllStudents] = useState([]);
    const [students, setStudents] = useState([]);
    const [isModal, setIsModal] = useState(false);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        getStudents(setAllStudents, setStudents)
    }, [])
    useEffect(() => {
        console.log(!students)
    }, [students])
    return (
        <div className='student'>
            {isModal && <ModalForm studentId={studentId} closeFunc={setIsModal} />}
            <div className="container">
                {allStudents && isHome && <FilterBlock allStudents={allStudents} setStudents={setStudents} />}
                <div className="student__cards">
                    {students.length > 0 ? students.map((el, index) => {
                        return <Card isAdmin={isAdmin} setIsModal={setIsModal} setStudentId={setStudentId} key={index} info={el} />
                    }) : <p className='student__unexist'>Студенты отсутствуют</p>}
                </div>
                {isHome && allStudents.length === 0 && <div className="student__btn">
                    <button onClick={() => {
                        setIsModal(true)
                    }}>Create student</button>
                </div>}
            </div>
        </div>
    )
}

export default Student