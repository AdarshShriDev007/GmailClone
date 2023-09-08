import React, { useEffect, useState } from 'react';
import "./EmailContainer.css";
import EmailSettings from './EmailSettings/EmailSettings';
import EmailType from './EmailType/EmailType';
import EmailList from './EmailList/EmailList';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function EmailContainer() {

  const [emails,setEmails] = useState([]);

 
  useEffect(() => {
    const queryData = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    onSnapshot(queryData,(snapdoc)=>{
      const snap = snapdoc.docs.map((doc)=>({
        id : doc.id,
        data : doc.data()
      }));
      setEmails(snap);
    });
  }, []);


  return (
    <div className='emailContainer'>
        <EmailSettings />
        <EmailType/>

        {
            emails.map(({id,data})=>{
              return <EmailList key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()} />
            })
        }
        
    </div>
  )
}

export default EmailContainer;