import './style.scss'
import empty from '../../../assets/img/empty-card-image.png'
import { deleteStudent } from '../../../assets/firebase/firabaseconfig'
import Swal from 'sweetalert2'
import del from '../../../assets/img/del.png'

const Card = ({ info, setStudentId, setIsModal, isAdmin }) => {
    const deletesStudent = () => {
        Swal.fire({
            title: 'Вы уверены?',
            text: "Вы не сможете вернуть данные!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, удалить!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteStudent(info.userId)
                Swal.fire(
                    'Удалено!',
                    'Данные успешно удалены.',
                    'success'
                )
            }
        })
    }
    const showModalUpgradeForm = () => {
        setIsModal(true)
        setStudentId(info.userId)
    }
    return (
        <div className="card">
            <img src={info.image || empty} alt="[имя студента]" />
            <div className="card__info">
                <h2 className='card__title'>{info.firstname} {info.lastname} </h2>
                <p className='card__group'>Группа: {info.group}</p>
                <p className='card__class'>Класс: {info.classes}</p>
                <p className='card__age'>Возраст: {info.age}</p>
                {isAdmin && <div className="card__btns">
                    <button className="card__btn card__change" onClick={showModalUpgradeForm}>Change</button>
                    <button className="card__btn card__delete" onClick={deletesStudent}><img src={del} alt="deletebtn" /></button>
                </div>}
            </div>
        </div>
    )
}

export default Card