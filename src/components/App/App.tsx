import React from 'react';
import HS from './App.module.css';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../../pages/Main/Main';
import Profile from '../../pages/Profile/Profile';
import Authorization from '../../pages/Authorization/Authorization';

function App() {
  return (
    <div className={HS.container}>       
      < Header />     
      < Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Authorization />}></Route>
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
