import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { deletes, getCookie } from '../../assets/firebase/firebaseFunctions'
import logo from '../../assets/img/s.jpg';
import './style.scss'

const Header = () => {
    const navigate = useNavigate()
    const logOut = () => {
        document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        navigate('/auth')
    }
    return (
        <div className='header'>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                    <p className="header__logo-text">chool</p>
                </div>
                <div className="header__info">
                    <div className="header__name">{getCookie('userName')}</div>
                    <div className="header__btns">
                        <button className="header__admin header__btn">Admin</button>
                        <button className="header__logOut header__btn" onClick={logOut}>LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header