import RadioButtons from '../radioButton/RadioButtons'
const FormItem = ({ errors, el, setRadio, radio, register, studentData }) => {
    return (
        <div className="form__item">
            <label forhtml={el.name}>{el.title}</label>
            {el.type === 'radio' ?
                <RadioButtons isTrue={studentData ? false : 'это поле обязательно к заполнению'}
                    setRadio={setRadio}
                    radio={radio}
                    set={el.settings}
                    register={register}
                    array={el.elements} />
                :
                <input
                    type={el.type}
                    placeholder={studentData && studentData[el.register]}
                    onChange={(event) => { studentData[el.register] = event.target.value }}
                    id={el.name}
                    name={el.name}
                    {...register(el.register, { required: studentData ? false : 'это поле обязательно к заполнению', ...el.settings })} />}
            {errors?.[el.register]?.message && <p className="form__error">{errors?.[el.register].message}</p>}
        </div>
    )
}

export default FormItem