import { getCookie } from '../../assets/firebase/firebaseFunctions'
import './style.scss'

const Student = () => {
    return (
        <div>
            <h1>my name</h1>
            <h1>{getCookie('userName')}</h1>
            <button>logOut</button>
        </div>
    )
}

export default Student