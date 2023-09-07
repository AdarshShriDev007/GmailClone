import React from 'react';
import './App.css';
import Header from './cmp/Header';
import Sidebar from './cmp/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Header />

      <div className='app-grid'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
