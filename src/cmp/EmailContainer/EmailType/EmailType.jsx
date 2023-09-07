import React from 'react';
import { Inbox, People, LocalOffer } from "@mui/icons-material";

function EmailType() {
  return (
    <div className='emailType'>
        <div className='emailTypeOptions emailTypeOptions-active'>
            <Inbox />
            <span>Primary</span>   
        </div>
        <div className='emailTypeOptions'>
            <People />
            <span>Social</span>   
        </div>
        <div className='emailTypeOptions'>
            <LocalOffer />
            <span>Promotions</span>   
        </div>
    </div>
  )
}

export default EmailType;