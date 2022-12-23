import { useForm } from 'react-hook-form';
import { postStudent } from '../../assets/firebase/firabaseconfig';
import './style.scss'

const ModalForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onClick',
    });

    const onSubmit = (data) => {
        console.log(data)
        // let nu = document.querySelector('#photo')
        // console.log(nu.files[0])
        // data.image = data.image.file
        // postStudent(data)
    }

    // useEffect(() => {
    //     console.log(errors)
    // }, [errors])
    return (
        <div className='modal'>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="modal__title">Create Student</h1>
                <div className="form__item">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" {...register('firstname', { required: 'поле обязательно к заполнению', minLength: { value: 3, message: 'должно быть больше 3 символов' } })} />
                    {errors?.name?.message && <p className="form__error">{errors?.name.message}</p>}
                </div>
                <div className="form__item">
                    <label for="surname">Surname</label>
                    <input type="text" id="surname" name="surname" {...register('lastname', { required: 'поле обязательно к заполнению', minLength: { value: 3, message: 'должно быть больше 3 символов' } })} />
                    {errors?.surname?.message && <p className="form__error">{errors?.surname.message}</p>}
                </div>
                <div className="form__item">
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" {...register('age', { required: 'поле обязательно к заполнению' })} />
                    {errors?.age?.message && <p className="form__error">{errors?.age.message}</p>}
                </div>
                <div className="form__item">
                    <label for="group">Group</label>
                    <div className="form__group">
                        <label for="letter-a">
                            <input className='form__radio' type="radio" id="letter-a" name="letter" value="A" {...register('group', { required: 'это поле обязательно к заполнению' })} />
                            <p className="form__radio-text">A</p>
                        </label>
                        <label for="letter-b">
                            <input className='form__radio' type="radio" id="letter-b" name="letter" value="B" {...register('group', { required: 'это поле обязательно к заполнению' })} />
                            <p className="form__radio-text">B</p>
                        </label>
                        <label for="letter-c">
                            <input className='form__radio' type="radio" id="letter-c" name="letter" value="C" {...register('group', { required: 'это поле обязательно к заполнению' })} />
                            <p className="form__radio-text">C</p>
                        </label>
                        <label for="letter-d">
                            <input className='form__radio' type="radio" id="letter-d" name="letter" value="D" {...register('group', { required: 'это поле обязательно к заполнению' })} />
                            <p className="form__radio-text">D</p>
                        </label>
                    </div>
                    {errors?.group?.message && <p className="form__error">{errors?.group.message}</p>}
                </div>
                <div className="form__item">
                    <label for="class">Class</label>
                    <input type="number" min={1} max={11} id="class" name="class" {...register('classes', { required: 'поле обязательно к заполнению' })} />
                    {errors?.class?.message && <p className="form__error">{errors?.class.message}</p>}
                </div>
                <div className="form__item">
                    <label for="photo">Photo</label>
                    <input type="file" id="photo" name="photo" {...register('image', { required: 'поле обязательно к заполнению' })} />
                    {errors?.photo?.message && <p className="form__error">{errors?.photo.message}</p>}
                </div>
                <button className='form__btn' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default ModalForm