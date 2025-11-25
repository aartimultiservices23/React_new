import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutoPing } from '../hooks/useAutoPing';

function PageOne() {
  const navigate = useNavigate();
  useAutoPing();

  const username = localStorage.getItem('currentUser') || 'User';

  return (
    <div className="app-page">
      <header className="app-header">
        <div className="app-header-title">Auto Snap App</div>
        <div className="app-header-user">Page One · {username}</div>
      </header>

      <main className="app-content">
        <div className="page-card">
          <h1 className="page-title">Page One</h1>
          <p className="page-subtitle">
            This is the first sample page. Use the buttons below to navigate around.
          </p>

          <div className="btn-row">
            <button
              className="btn-primary"
              onClick={() => navigate('/page-two')}
            >
              Go to Page Two
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate('/home')}
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageOne;
