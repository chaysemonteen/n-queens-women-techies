import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Blog from './components/Blog';
import NewsBoard from './components/NewsBoard';
import AnonymousReport from './components/AnonymousReport';
import Complaint from './components/Complaint';
import ComplaintDetails from './components/ComplaintDetails';
import FinancialAid from './components/FinancialAid';
import HRPortal from './components/HRPortal';
import Chatbot from './components/Chatbot';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SignUpHR from './components/SignUpHR';
import LoginHR from './components/LoginHR';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newsboard" element={<NewsBoard />} />
        <Route path="/anonymous-report" element={<AnonymousReport />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/complaint-details" element={<ComplaintDetails />} />
        <Route path="/financial-aid" element={<FinancialAid />} />
        <Route path="/hr-portal" element={<HRPortal />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signuphr" element={<SignUpHR />} />
        <Route path="/loginhr" element={<LoginHR />} />
      </Routes>
    </Router>
  );
}

export default App;
