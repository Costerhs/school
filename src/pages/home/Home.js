import Student from "../students/Student"
import './style.scss'


const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <h1 className='home__title'>Students</h1>
                <Student isHome />
            </div>
        </div>
    )
}

export default Home