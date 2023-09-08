import React, { useEffect } from 'react';
import './App.css';
import Header from './cmp/Header/Header';
import Sidebar from './cmp/Sidebar/Sidebar';
import EmailContainer from './cmp/EmailContainer/EmailContainer';
import ComposeModal from './cmp/ComposeModal/ComposeModal';
import { useSelector, useDispatch } from "react-redux";
import { selectedMail } from "./features/mailSlice";
import EmailDetails from './cmp/EmailDetails/EmailDetails';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './cmp/Login/Login';

import { selectedUser, signIn, signOut } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const isopen = useSelector(selectedMail);
  const isUser = useSelector(selectedUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user)
      {
        dispatch(signIn({
          displayName : user.displayName,
          fromEmail : user.email,
          photoURL : user.photoURL
        }));
      }
      else{
        dispatch(signOut());
      }
    })
  },[dispatch]);
  
  return (
      <>
        <Router>
          {isUser ?  <div className='App'>
              <Header />

              <div className='app-grid'>
                <Sidebar />
                <Routes>
                  <Route path='/' element={<EmailContainer />} />
                  <Route path='/mail'element={<EmailDetails />} />
                </Routes>
              </div>

              {
                isopen ? <ComposeModal /> : null
              }
              
              
            </div>: <Login />}
        </Router>
      </>  
  );
}

export default App;
