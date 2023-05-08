import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import React from 'react';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';

const LazyAbout = React.lazy(() => import('./Components/About'))
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<React.Suspense fallback="Loading....">
          <LazyAbout />
        </React.Suspense>} />
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
