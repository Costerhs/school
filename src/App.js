import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import Login from './pages/login/Login';
import Student from './pages/students/Student';

const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);

  useEffect(() => {
    if (locat.pathname === "/auth") {
      setLocation(true);
    } else {
      setLocation(false);
    }

    console.log(location)
  }, [locat]);

  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        <Route path='auth' element={<Login />} />
        <Route path='/' element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;

