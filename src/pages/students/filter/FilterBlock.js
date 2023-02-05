import { useEffect, useState } from 'react'
import './style.scss'
import { radioData } from '../../../assets/localData/localData.js'
import { getFilled } from '../../../assets/defFunction/defFunction'

const FilterBlock = ({ allStudents, setStudents }) => {
    const [filterData, setFilterData] = useState({ firstname: '', age: null, classes: null, group: '' });

    const handleChange = (event) => {
        setFilterData({ ...filterData, [event.target.name]: event.target.value })
    }
    const unCheckRadio = (event) => {
        if (filterData[[event.target.name]] == event.target.value) setFilterData({ ...filterData, [event.target.name]: '' })
    }
    const filterOfStudent = () => {
        let filledFilterData = getFilled(filterData);
        let filterStudentsData = allStudents.filter(el => {
            return Object.entries(filledFilterData).every(([key, value]) => {
                if (key == 'firstname') {
                    return !el[key].indexOf(value)
                } else {
                    return el[key] == value
                }
            })
        })
        setStudents(filterStudentsData)
    }

    useEffect(() => {
        filterOfStudent()
    }, [filterData])
    return (
        <form className='filter'>
            <h1>Filtering</h1>
            <div className="filter__list">
                <div className='filter__item'>
                    <label htmlFor='firstname'>Name</label>
                    <input type='text' name='firstname' onChange={handleChange} />
                </div>
                <div className='filter__item'>
                    <label htmlFor='age'>Age</label>
                    <input type='numbber' name='age' onChange={handleChange} />
                </div>
                <div className='filter__item'>
                    <label htmlFor='group'>Group</label>
                    <div className="filter__groups">
                        {radioData.map((el, index) => {
                            return <label forhtml={`letter-${el}`} key={index}>
                                <input onClick={unCheckRadio} className='filter__radio' checked={el === filterData.group} onChange={handleChange} value={el} type="radio" id={`letter-${el}`} name={'group'} />
                                <p className="filter__radio-text">{el}</p>
                            </label>
                        })}
                    </div>
                </div>
                <div className='filter__item'>
                    <label htmlFor='classes'>Class</label>
                    <select value={filterData.classes} name='classes' onChange={handleChange}>
                        <option key={0} value={null}>

                        </option>
                        {[...Array(11).keys()].map((number) => (
                            <option key={number + 1} value={number + 1}>
                                {number + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </form>
    )
}

export default FilterBlock