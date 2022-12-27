import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { getCookie } from './assets/firebase/firebaseFunctions';
import Header from './component/header/Header';
import Admin from './pages/admin/Admin';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Student from './pages/students/Student';

const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie('userName')) {
      navigate('auth')
    }
  }, [getCookie('userName')])

  useEffect(() => {
    if (locat.pathname === "/auth") {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, [locat]);

  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        <Route path='auth' element={<Login />} />
        <Route path='admin' element={<Admin />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

