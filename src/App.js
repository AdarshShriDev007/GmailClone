import React from 'react';
import './App.css';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import EmailContainer from './cmp/EmailContainer/EmailContainer';
import ComposeModal from './cmp/ComposeModal/ComposeModal';
import { useSelector } from "react-redux";
import { selectedMail } from "./features/mailSlice";
import EmailDetails from './cmp/EmailDetails/EmailDetails';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const mail = useSelector(selectedMail);
  const isopen = mail;
  
  return (
    <Router>
      <div className="App">
        <Header />

        <div className='app-grid'>
          <Sidebar />
          <Routes>
            <Route path='/' element={<EmailContainer />} />
            <Route path='/mail' element={<EmailDetails />} />
          </Routes>
        </div>
        {
          isopen ? <ComposeModal /> : null 
        }
        
      </div>
    </Router>
  );
}

export default App;
