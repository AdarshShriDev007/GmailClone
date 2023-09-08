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

function EmailDetails() {
  return (
    <div className='emailDetails'>
      <div className='emailSettings'>
        <div className='emailSettings-left'>
            <IconButton><ArrowBack /></IconButton>
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
                <span><b>This is Subject</b></span>
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
                <span><b>Adarsh Kumar</b></span>
                <p>adarshkumar@gmail.com</p>
            </div>
            <div className='emailDetail-middle-header-right'>
              <span>04:53 AM</span>
              <IconButton><Star /></IconButton>
              <IconButton><Reply /></IconButton>
              <IconButton><MoreVert /></IconButton>
            </div>
          </div>

          <div className='emailDetail-body'>
            <span>This is message</span>
          </div>
      </div>

    </div>
  )
}

export default EmailDetails;