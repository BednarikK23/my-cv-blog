import React from 'react';
import Navigation from './components/common/navigation';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';

import PageRenderer from './pageRenderer';

function App() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Routes>
          <Route path="/:page" element={<PageRenderer />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
