import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Student from './pages/students/Student';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='auth' element={<Login />} />
        <Route path='/' element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;

