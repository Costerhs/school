import { authes, logOut } from '../../assets/firebase/firabaseconfig'
import { deletes, getCookie } from '../../assets/firebase/firebaseFunctions'
import './style.scss'

const Login = () => {
    const showName = () => {
        let name = getCookie('userName')
        console.log(name)
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={authes}>login</button>
            <button onClick={logOut}>log out</button>
            <button onClick={showName}>my name</button>
            <button onClick={deletes}>delte</button>
        </div>
    )
}

export default Login