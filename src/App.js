import React from 'react';
import './App.css';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import EmailContainer from './cmp/EmailContainer/EmailContainer';
import ComposeModal from './cmp/ComposeModal/ComposeModal';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='app-grid'>
        <Sidebar />
        <EmailContainer />
      </div>
      <ComposeModal />
    </div>
  );
}

export default App;
