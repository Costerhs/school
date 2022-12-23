import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudents } from '../../assets/firebase/firabaseconfig'
import { getCookie } from '../../assets/firebase/firebaseFunctions'
import ModalForm from '../../component/form/ModalForm'
import Card from './card/Card'
import './style.scss'

const Student = () => {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [isModal, setIsModal] = useState(false);
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
            {isModal && <ModalForm />}
            <div className="container">
                <h1 className='student__title'>Students</h1>
                <div className="student__cards">
                    {data && data.map((el, index) => {
                        return <Card key={index} info={el} />
                    })}
                </div>
                <div className="student__btn">
                    <button onClick={() => setIsModal(true)}>Create student</button>
                </div>
            </div>
        </div>
    )
}

export default Student