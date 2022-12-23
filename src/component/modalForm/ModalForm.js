import './style.scss'

const ModalForm = () => {
    return (
        <div className='modal'>
            <form className="form">
                <h1 className="modal__title">Create Student</h1>
                <div className="form__item">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="form__item">
                    <label for="surname">Surname</label>
                    <input type="text" id="surname" name="surname" />
                </div>
                <div className="form__item">
                    <label for="age">Age</label>
                    <input type="number" min={1} max={11} id="age" name="age" />
                </div>
                <div className="form__item">
                    <label for="group">Group</label>
                    <div className="form__group">
                        <label for="letter-a">
                            <input className='form__radio' type="radio" id="letter-a" name="letter" value="a" />
                            <p className="form__radio-text">A</p>
                        </label>
                        <label for="letter-b">
                            <input className='form__radio' type="radio" id="letter-b" name="letter" value="b" />
                            <p className="form__radio-text">B</p>
                        </label>
                        <label for="letter-c">
                            <input className='form__radio' type="radio" id="letter-c" name="letter" value="c" />
                            <p className="form__radio-text">C</p>
                        </label>
                        <label for="letter-d">
                            <input className='form__radio' type="radio" id="letter-d" name="letter" value="d" />
                            <p className="form__radio-text">D</p>
                        </label>
                    </div>
                </div>
                <div className="form__item">
                    <label for="class">Class</label>
                    <input type="number" min={1} max={11} id="class" name="class" />
                </div>
                <div className="form__item">
                    <label for="photo">Photo</label>
                    <input type="file" id="photo" name="photo" />
                </div>
                <button className='form__btn' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default ModalForm