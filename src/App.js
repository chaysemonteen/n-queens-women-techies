import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AnonymousReport from './Pages/AnonymousReport';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/newsboard" element={<NewsBoard />} />
      <Route path="/anonymous-report" element={<AnonymousReport />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/complaint-details" element={<ComplaintDetails />} />
      <Route path="/financial-aid" element={<FinancialAid />} />
      <Route path="/hr-portal" element={<HRPortal />} />
      <Route path="/chatbot" element={<Chatbot />} /> */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
      );
}

export default App;


