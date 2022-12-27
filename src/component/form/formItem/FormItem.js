import React from 'react'
import RadioButtons from '../radioButton/RadioButtons'
function FormItem({ errors, el, setRadio, radio, register, studentData }) {
    return (
        <div className="form__item">
            <label forhtml={el.name}>{el.title}</label>
            {el.type === 'radio' ?
                <RadioButtons setRadio={setRadio} radio={radio} set={el.settings} register={register} array={el.elements} />
                : <input type={el.type} placeholder={studentData && studentData[el.register]} onChange={(event) => { studentData[el.register] = event.target.value }} id={el.name} name={el.name} {...register(el.register, el.settings)} />}
            {errors?.[el.register]?.message && <p className="form__error">{errors?.[el.register].message}</p>}
        </div>
    )
}

export default FormItem

/*defaultValue={studentData && studentData[el.register]}*/