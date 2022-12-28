import React from 'react'

function RadioButtons({ array, radio, setRadio, register, isTrue }) {
    return (
        <div className='form__group'>
            {array.map((el, index) => {
                return <label forhtml={`letter-${el}`} key={index}>
                    <input className='form__radio' onClick={(event) => setRadio(event.target.value)} checked={radio && radio == el ? true : false} type="checkbox" id={`letter-${el}`} name="letter" value={el} {...register('group', { required: isTrue })} />
                    <p className="form__radio-text">{el}</p>
                </label>
            })}
        </div>
    )
}

export default RadioButtons