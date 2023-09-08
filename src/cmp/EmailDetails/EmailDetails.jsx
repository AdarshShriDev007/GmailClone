import React, { useEffect } from 'react';
import "./EmailDetails.css";
import {
  IconButton,
  Avatar
} from "@mui/material";
import {
  ArrowBack,
  ArrowDropDown,
  Refresh,
  MoreVert,
  ChevronLeft,
  ChevronRight,
  LabelImportant,
  Print,
  Launch,
  Star,
  Reply
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectedmailDetail } from "../..//features/mailSlice";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

function EmailDetails() {

  const mailData = useSelector(selectedmailDetail);
  const navigate = useNavigate();
  const cookie = new Cookies();
 
  if(mailData !== null)
  {
    const textmail = JSON.stringify(mailData);
    const encryptData = btoa(textmail);
    cookie.set("mail",encryptData);
  }

    const mailEnc = cookie.get("mail");
    const decryptData = atob(mailEnc);
    const mail = JSON.parse(decryptData);
  

  return (
    <div className='emailDetails'>
      <div className='emailSettings'>
        <div className='emailSettings-left'>
            <IconButton onClick={()=>navigate("/")}><ArrowBack /></IconButton>
            <IconButton><ArrowDropDown /></IconButton>
            <IconButton><Refresh /></IconButton>
            <IconButton><MoreVert /></IconButton>
        </div>

        <div className='emailSettings-right'>
            <span>1-50 of 5,346</span>
            <IconButton><ChevronLeft /></IconButton>
            <IconButton><ChevronRight /></IconButton>
        </div>
      </div>

      <div className='emailDetail-box'>
          <div className='emailDetail-header'>
              <div className='emailDetail-header-left'>
                <span><b>{mail.subject}</b></span>
                <IconButton>
                  <LabelImportant />
                </IconButton>
              </div>
              <div className='emailDetail-header-right'>
                <IconButton>
                  <Print />
                </IconButton>
                <IconButton>
                  <Launch />
                </IconButton>
              </div>
          </div>

          <div className='emailDetail-middle-header'>
            <div className='emailDetail-middle-header-left'>
                <IconButton><Avatar /></IconButton> 
                <span><b>{mail.name}</b></span>
                <p>{mail.from}</p>
            </div>
            <div className='emailDetail-middle-header-right'>
              <span>{mail.time}</span>
              <IconButton><Star /></IconButton>
              <IconButton><Reply /></IconButton>
              <IconButton><MoreVert /></IconButton>
            </div>
          </div>

          <div className='emailDetail-body'>
            <span>{mail.message}</span>
          </div>
      </div>

    </div>
  )
}

export default EmailDetails;