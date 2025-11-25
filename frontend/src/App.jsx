import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import './App.css';

function App() {
  const isLoggedIn = !!localStorage.getItem('authToken'); // simple demo

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/page-one"
        element={isLoggedIn ? <PageOne /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/page-two"
        element={isLoggedIn ? <PageTwo /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;
