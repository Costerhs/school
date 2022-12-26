import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudents, postStudent } from '../../assets/firebase/firabaseconfig'
import { getCookie } from '../../assets/firebase/firebaseFunctions'
import ModalForm from '../../component/form/ModalForm'
import Card from './card/Card'
import './style.scss'
import s from '../../assets/img/s.jpg'

const randomStr = () => {
    var abc = "abcdefghijklmnopqrstuvwxyz";
    var rs = "";
    while (rs.length < 6) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs
}
const create = () => {
    postStudent({ firstname: randomStr(), lastname: randomStr(), age: 19, group: 'A', classes: 11, image: s })
}


const Student = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [isModal, setIsModal] = useState(false);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        if (!getCookie('userName')) {
            navigate('auth')
        }
    }, [getCookie('userName')])

    useEffect(() => {
        getStudents(setData)
    }, [])

    return (
        <div className='student'>
            {isModal && <ModalForm studentId={studentId} closeFunc={setIsModal} />}
            <div className="container">
                <h1 className='student__title'>Students</h1>
                <div className="student__cards">
                    {data && data.map((el, index) => {
                        return <Card setIsModal={setIsModal} setStudentId={setStudentId} key={index} info={el} />
                    })}
                </div>
                <div className="student__btn">
                    <button onClick={() => {
                        console.log('clicked')
                        setIsModal(true)
                        // create()
                    }}>Create student</button>
                </div>
            </div>
        </div>
    )
}

export default Student