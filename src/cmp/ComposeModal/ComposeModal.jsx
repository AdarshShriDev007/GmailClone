import React, { useState } from 'react';
import "./ComposeModal.css";
import { 
  Remove, 
  Height, 
  Close,
  ArrowDropDown,
  FormatColorText,
  AttachFile,
  Link,
  InsertEmoticon,
  NoteAdd,
  Photo,
  PhonelinkLock,
  Create,
  MoreVert,
  Delete
 } from "@mui/icons-material";
 import { useDispatch, useSelector } from "react-redux";
 import { isMailClose } from "../../features/mailSlice";
 import {  selectedUser } from "../../features/userSlice";
 import { collection, addDoc } from "firebase/firestore";
 import { db } from "../../firebase";


function ComposeModal() {

    const dispatch = useDispatch();
    const user = useSelector(selectedUser);

    const [to,setTo] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const emailForm = async (e)=>{
        e.preventDefault();
        try{
            const result = await addDoc(collection(db, "emails"),{
                to,
                name : user.displayName,
                fromEmail : user.fromEmail,
                subject,
                message,
                timestamp : new Date()
            });
            console.log("successfull", result);
            setTo("");
            setSubject("");
            setMessage("");
            dispatch(isMailClose());
        }
        catch(e){
            console.error("failed",e);
        }
    }

  return (
    <div className='compose'>
        <div className='compose-header'>
          <div className='compose-header-left'>
            <span>New message</span>
          </div>
          <div className='compose-header-right'>
              <Remove />
              <Height />
              <Close onClick={()=>dispatch(isMailClose())} />
          </div>
        </div>

        <form onSubmit={emailForm}>
            <div className='compose-body'>
                <div className='compose-bodyForm'>
                    <input value={to} onChange={(e)=>setTo(e.target.value)} type='email' placeholder='Reciepents'/>
                    <input value={subject} onChange={(e)=>setSubject(e.target.value)} type='text' placeholder='Subject'/>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="20" ></textarea>
                </div>
            </div>

            <div className='compose-footer'>
                <div className='compose-footer-left'>
                    <button type='submit'>
                        Send <ArrowDropDown />
                    </button>
                    <FormatColorText />
                    <AttachFile />
                    <Link />
                    <InsertEmoticon />
                    <NoteAdd />
                    <Photo />
                    <PhonelinkLock />
                    <Create />
                    <MoreVert />
                </div>
                <div className='compose-footer-right'>
                    <Delete />
                </div>
            </div>
        </form>
    </div>
  )
}

export default ComposeModal;