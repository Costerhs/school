import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { deletes, getCookie } from '../../assets/firebase/firebaseFunctions'
import './style.scss'

const Student = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!getCookie('userName')) {
            navigate('auth')
        }
    }, [getCookie('userName')])

    return (
        <div className='student'>
            <div className="container">
                
            </div>
        </div>
    )
}

export default Student
/*  <h1>my name</h1>
            <h1>{getCookie('userName')}</h1>
            <button onClick={deletes}>logOut</button>
            <NavLink to={'/auth'}>
                auth
            </NavLink>*/