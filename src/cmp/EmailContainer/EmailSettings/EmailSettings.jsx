import React from 'react';
import {
    IconButton
} from "@mui/material";
import {
    CheckBoxOutlineBlank,
    ArrowDropDown,
    Refresh,
    MoreVert,
    ChevronLeft,
    ChevronRight
} from "@mui/icons-material";

function EmailSettings() {
  return (
    <div className='emailSettings'>
        <div className='emailSettings-left'>
            <IconButton><CheckBoxOutlineBlank /></IconButton>
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
  )
}

export default EmailSettings;