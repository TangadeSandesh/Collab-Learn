import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';
import Home from './Home.js';
import StudentPage from './StudentPage.js';
import TeacherPage from './TeacherPage.js';
import ProfileModal from './ProfileModal.js';
import UploadModal from './UploadModal.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignupForm/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/studentpage' element={<StudentPage/>}></Route>
      <Route path='/teacherpage' element={<TeacherPage/>}></Route>
      <Route path='/profilemodal' element={<ProfileModal/>}></Route>
      <Route path='/uploadmodal' element={<UploadModal/>}></Route>

    </Routes>
  </BrowserRouter>
);

