import React from 'react';
import './App.css';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import EmailContainer from './cmp/EmailContainer/EmailContainer';
import ComposeModal from './cmp/ComposeModal/ComposeModal';
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";

function App() {
  const mail = useSelector(selectedMail);
  const isopen = mail;
  
  return (
    <div className="App">
      <Header />

      <div className='app-grid'>
        <Sidebar />
        <EmailContainer />
      </div>
      {
        isopen ? <ComposeModal /> : null 
      }
      
    </div>
  );
}

export default App;
