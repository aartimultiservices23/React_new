import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutoPing } from '../hooks/useAutoPing';

function PageTwo() {
  const navigate = useNavigate();
  useAutoPing();

  const username = localStorage.getItem('currentUser') || 'User';

  return (
    <div className="app-page">
      <header className="app-header">
        <div className="app-header-title">Auto Snap App</div>
        <div className="app-header-user">Page Two · {username}</div>
      </header>

      <main className="app-content">
        <div className="page-card">
          <h1 className="page-title">Page Two</h1>
          <p className="page-subtitle">
            Second sample page. From here you can go back to Page One or Home.
          </p>

          <div className="btn-row">
            <button
              className="btn-primary"
              onClick={() => navigate('/page-one')}
            >
              Go to Page One
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

export default PageTwo;
