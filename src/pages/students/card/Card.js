import './style.scss'

const Card = ({ info }) => {
    return (
        <div className="card">
            <img src={info.image} alt="[имя студента]" />
            <div className="card__info">
                <h2 className='card__title'>{info.firstname} {info.lastname} </h2>
                <p className='card__group'>Группа: {info.group}</p>
                <p className='card__class'>Класс: {info.classes}</p>
                <p className='card__age'>Возраст: {info.age}</p>
            </div>
        </div>
    )
}

export default Card