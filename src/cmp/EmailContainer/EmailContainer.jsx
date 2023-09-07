import React from 'react';
import "./EmailContainer.css";
import EmailSettings from './EmailSettings/EmailSettings';
import EmailType from './EmailType/EmailType';
import EmailList from './EmailList/EmailList';

function EmailContainer() {
  return (
    <div className='emailContainer'>
        <EmailSettings />
        <EmailType/>

        <EmailList name={"Adarsh Kumar"} subject={"This is subject"} message={"This is message"} time={"04:24 AM"} />
    </div>
  )
}

export default EmailContainer;