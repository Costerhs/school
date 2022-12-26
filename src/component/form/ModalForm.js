import { useForm } from 'react-hook-form';
import { getStudent, postStudent, updateStudent } from '../../assets/firebase/firabaseconfig';
import './style.scss'
import close from '../../assets/img/close.svg'
import { useEffect, useState } from 'react';
import FormItem from './formItem/FormItem';

const radioData = ["A", "B", "C", 'D']
const objOfForm = [
    { name: 'name', title: 'Name', type: 'text', register: 'firstname', settings: { required: 'поле обязательно к заполнению', minLength: { value: 3, message: 'должно быть больше 3 символов' } } },
    { name: 'surname', title: 'Surname', type: 'text', register: 'lastname', settings: { minLength: { value: 3, message: 'должно быть больше 3 символов' }, required: 'поле обязательно к заполнению' } },
    { name: 'age', title: 'Age', type: 'number', register: 'age', settings: { required: 'поле обязательно к заполнению' } },
    { name: 'group', title: 'Group', type: 'radio', register: 'group', elements: radioData, settings: { required: 'поле обязательно к заполнению' } },
    { name: 'class', title: 'Class', type: 'number', register: 'classes', settings: { min: { value: 1, message: 'минимальное значение 1' }, max: { value: 1, message: 'максимальное значение 11' }, required: 'поле обязательно к заполнению' } },
    { name: 'photo', title: "Photo", type: 'file', register: 'image', settings: { required: 'поле обязательно к заполнению' } },
]

const getFilled = (obj) => {
    Object.entries(obj).map(el => {
        if (!el[1]) delete obj[el[0]]
    })
    return obj
}
const ModalFormExperiment = ({ closeFunc, studentId }) => {
    const [studentData, setStudentData] = useState({});
    const [radio, setRadio] = useState('');
    const {
        register,
        formState: { errors, reset },
        handleSubmit,
    } = useForm({
        mode: 'onClick',
    });

    const onSubmit = (data) => {
        data.group = data.group[0]
        let newObj = getFilled(data)
        if (studentId && typeof studentId !== 'boolean') {
            updateStudent(data, studentId)
            closeMe()
        }
        else {
            postStudent(data)
            closeMe()
        }
    }
    const closeMe = () => {
        closeFunc(false)
        // reset()
    }

    useEffect(() => {
        if (studentId && typeof studentId !== 'boolean') {
            getStudent(setStudentData, studentId, setRadio)
        }
    }, [studentId])
    return (
        <div className='modal'>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="modal__title">Create Student</h1>
                <img src={close} alt="close" className='modal__close' onClick={closeMe} />
                {objOfForm.map(el => {
                    if (studentData) delete el.settings.required
                    return <FormItem errors={errors} el={el} setRadio={setRadio} radio={radio} register={register} studentData={studentData} />
                })}
                <button className='form__btn' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default ModalFormExperiment
/*defaultValue={studentData && studentData[el.register]}*/
/*  el.elements.map((el, index) => {
                                return <label for={`letter-${el}`} key={index}>
                                    <input className='form__radio' onClick={(event) => setRadio(event.target.value)} checked={radio && radio == el ? true : false} type="checkbox" id={`letter-${el}`} name="letter" value={el} {...register('group', { required: 'это поле обязательно к заполнению' })} />
                                    <p className="form__radio-text">{el}</p>
                                </label>
                            })*/
/*<div className="form__item">
                    <label for="name">Name</label>
                    <input type="text" defaultValue={studentData && studentData.firstname} id="name" name="name" {...register('firstname', { required: 'поле обязательно к заполнению', minLength: { value: 3, message: 'должно быть больше 3 символов' } })} />
                    {errors?.firstname?.message && <p className="form__error">{errors?.firstname.message}</p>}
                </div>
                <div className="form__item">
                    <label for="surname">Surname</label>
                    <input type="text" id="surname" defaultValue={studentData && studentData.lastname} name="surname" {...register('lastname', { required: 'поле обязательно к заполнению', minLength: { value: 3, message: 'должно быть больше 3 символов' } })} />
                    {errors?.lastname?.message && <p className="form__error">{errors?.lastname.message}</p>}
                </div>
                <div className="form__item">
                    <label for="age">Age</label>
                    <input type="number" id="age" name="age" defaultValue={studentData && studentData.age} {...register('age', { required: 'поле обязательно к заполнению' })} />
                    {errors?.age?.message && <p className="form__error">{errors?.age.message}</p>}
                </div>
                <div className="form__item">
                    <label for="group">Group</label>
                    <div className="form__group">
                        {radioData.map((el, index) => {
                            return <label for={`letter-${el}`} key={index}>
                                <input className='form__radio' onClick={(event) => setRadio(event.target.value)} checked={radio && radio == el ? true : false} type="checkbox" id={`letter-${el}`} name="letter" value={el} {...register('group', { required: 'это поле обязательно к заполнению' })} />
                                <p className="form__radio-text">{el}</p>
                            </label>
                        })}
                    </div>
                    {errors?.group?.message && <p className="form__error">{errors?.group.message}</p>}
                </div>
                <div className="form__item">
                    <label for="class">Class</label>
                    <input type="number" min={1} max={11} id="class" name="class" defaultValue={studentData && studentData.classes} {...register('classes', { required: 'поле обязательно к заполнению' })} />
                    {errors?.classes?.message && <p className="form__error">{errors?.classes.message}</p>}
                </div>
                <div className="form__item">
                    <label for="photo">Photo</label>
                    <input type="file" value={''} id="photo" name="photo" {...register('image', { required: 'поле обязательно к заполнению' })} />
                    {errors?.photo?.message && <p className="form__error">{errors?.photo.message}</p>}
                </div>*/