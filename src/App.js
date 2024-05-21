import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import AdmonUser from "./pages/AdmonUser";
import Navigation from './components/Navigation';
import UserUpdateForm from './components/UserUpdateForm';

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/UserAdmon" element={<AdmonUser />} />
          <Route path="/update" element={<UserUpdateForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
