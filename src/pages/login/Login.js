import { useNavigate } from 'react-router-dom'
import { authes } from '../../assets/firebase/firabaseconfig'
import './style.scss'
import google from '../../assets/img/google.png'
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const login = async () => {
        await authes()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successful authorization',
            showConfirmButton: false,
            timer: 1500
        }).then(() => navigate('/'))
    }

    return (
        <div className='login'>
            <div className="container">
                <h1>Login</h1>
                <button className="login__btn" onClick={login}>
                    <img src={google} alt="" />
                    <p className="login__text">sign in with google</p>
                </button>
            </div>
        </div>
    )
}

export default Login