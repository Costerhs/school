import { useForm } from 'react-hook-form';
import { getStudent, postStudent, updateStudent } from '../../assets/firebase/firabaseconfig';
import './style.scss'
import close from '../../assets/img/close.svg'
import { useEffect, useState } from 'react';
import FormItem from './formItem/FormItem';
import { objOfForm } from '../../assets/localData/localData';
import { getFilled } from '../../assets/defFunction/defFunction';

const ModalFormExperiment = ({ closeFunc, studentId }) => {
    const [studentData, setStudentData] = useState();
    const [radio, setRadio] = useState('');
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onClick',
    });

    const onSubmit = (data) => {
        data.group = data.group[0]
        getFilled(data)
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
        setStudentData(null)
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
                    return <FormItem errors={errors} el={el} setRadio={setRadio} radio={radio} register={register} studentData={studentData} />
                })}
                <button className='form__btn' type="submit">Submit</button>
            </form>
        </div >
    )
}

export default ModalFormExperiment