import { NavLink, useNavigate } from 'react-router-dom';
import { getCookie } from '../../assets/defFunction/defFunction';
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
                <NavLink className="header__logo" to='/'>
                    <img src={logo} alt="logo" />
                    <p className="header__logo-text">chool</p>
                </NavLink>
                <div className="header__info">
                    <div className="header__name">{getCookie('userName')}</div>
                    <div className="header__btns">
                        <NavLink to={'/admin'} className="header__admin header__btn">Admin</NavLink>
                        <button className="header__logOut header__btn" onClick={logOut}>LogOut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header