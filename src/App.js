import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterLayout from './layouts/RegisterLayout';
import Login from './pages/Login';
import PersonalInfo from './pages/PersonalInfo';
import Education from './pages/Education';
import Languages from './pages/Languages';
import Experience from './pages/Experience';
import UserPhoto from './pages/UserPhoto';

function App() {
  return (
    // <div className="w-full min-h-[100vh] bg-main-bg bg-no-repeat bg-cover bg-center blur-md flex justify-center items-center">
    //   <div className='modal w-[50%] h-[50%] bg-black z-10' >
    //     hello
    //   </div>
    // </div>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterLayout />}>
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="education" element={<Education />} />
        <Route path="languages" element={<Languages />} />
        <Route path="experience" element={<Experience />} />
        <Route path="user-photo" element={<UserPhoto />} />
      </Route>
    </Routes>
  );
}

export default App;
