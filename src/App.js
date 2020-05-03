import React from 'react';
import './App.css';
import MarkdownPage from './containers/MarkdownPage';
import MarkdownProvider from '../src/providers/MarkdownProvider';

function App() {
  return (
    <div className="App">
      <MarkdownProvider>
        <header className="App-header">
          <MarkdownPage />
        </header>
      </MarkdownProvider>
    </div>
  );
}

export default App;
