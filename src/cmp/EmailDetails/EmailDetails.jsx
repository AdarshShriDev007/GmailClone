import React from 'react';
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

function EmailDetails() {

  const mailData = useSelector(selectedmailDetail);
  const navigate = useNavigate();

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
                <span><b>{mailData.subject}</b></span>
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
                <span><b>{mailData.subject}</b></span>
                <p>{mailData.name}</p>
            </div>
            <div className='emailDetail-middle-header-right'>
              <span>{mailData.time}</span>
              <IconButton><Star /></IconButton>
              <IconButton><Reply /></IconButton>
              <IconButton><MoreVert /></IconButton>
            </div>
          </div>

          <div className='emailDetail-body'>
            <span>{mailData.message}</span>
          </div>
      </div>

    </div>
  )
}

export default EmailDetails;