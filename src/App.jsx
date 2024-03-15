import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import Navbar from './components/Navbar';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReg, setIsReg] = useState(false);

  return (
    <Router>
      {isLoggedIn &&   <Navbar />}
    {isReg && <Navbar/>}

      {!isLoggedIn && !isReg && (
        <div className='text-center'>
          <Link to="/login"><Login /></Link>
          <Link to='/register'><Register /></Link>
        </div>
      )}

      <Routes>
        {!isLoggedIn && (
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} setIsReg={setIsReg} />} />
        )}
        {!isReg && (
          <Route path='/register' element={<RegForm setIsLoggedIn={setIsLoggedIn} setIsReg={setIsReg} />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;