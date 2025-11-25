import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutoPing } from '../hooks/useAutoPing';

function HomePage() {
  const navigate = useNavigate();
  const username = localStorage.getItem('currentUser') || 'User';

  // start 20-second ping
  useAutoPing();

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="app-page">
      <header className="app-header">
        <div className="app-header-title">Auto Snap App</div>
        <div className="app-header-user">Logged in as: {username}</div>
      </header>

      <main className="app-content">
        <div className="page-card">
          <h1 className="page-title">Home</h1>
          <p className="page-subtitle">
            Demo React + Spring Boot app with simple navigation and a 20-second auto event.
          </p>

          <span className="tag">🏃 Auto ping running every 20 seconds</span>

          <div className="btn-row">
            <button
              className="btn-primary"
              onClick={() => navigate('/page-one')}
            >
              Go to Page One
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate('/page-two')}
            >
              Go to Page Two
            </button>
            <button className="btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
