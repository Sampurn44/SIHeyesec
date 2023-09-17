import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import { useSelector } from 'react-redux';
import DashboardPage from './scenes/dashboard';

function App() {
  const isAuth = Boolean(useSelector(state => state.token));

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
