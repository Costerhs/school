import { useEffect, useState } from 'react'
import { getStudents } from '../../assets/firebase/firabaseconfig'
import ModalForm from '../../component/form/ModalForm'
import Card from './card/Card'
import './style.scss'


const Student = ({ isAdmin, isHome }) => {
    const [data, setData] = useState();
    const [isModal, setIsModal] = useState(false);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        getStudents(setData)
    }, [])

    return (
        <div className='student'>
            {isModal && <ModalForm studentId={studentId} closeFunc={setIsModal} />}
            <div className="container">
                <div className="student__cards">
                    {data ? data.map((el, index) => {
                        return <Card isAdmin={isAdmin} setIsModal={setIsModal} setStudentId={setStudentId} key={index} info={el} />
                    }) : 'Студентов нету'}
                </div>
                {isHome && !data && <div className="student__btn">
                    <button onClick={() => {
                        setIsModal(true)
                    }}>Create student</button>
                </div>}
            </div>
        </div>
    )
}

export default Student