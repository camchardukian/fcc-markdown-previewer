import React from 'react';
import './App.css';
import MarkdownPage from './containers/MarkdownPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is my app.</p>
        <MarkdownPage />
      </header>
    </div>
  );
}

export default App;
