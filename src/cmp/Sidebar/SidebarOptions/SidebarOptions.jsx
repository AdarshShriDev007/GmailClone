import React from 'react';
import {
    IconButton
} from "@mui/material";

function SidebarOptions({icon,label,number}) {
  return (
    <div className='sidebarOptions'>
        <div className='sidebarOptions-left'>
            <IconButton>
                {icon}
            </IconButton>
        </div>

        <div className='sidebarOptions-middle'>
            <span>{label}</span>
        </div>

        <div className='sidebarOptions-right'>
            <span>{number}</span>
        </div>
    </div>
  )
}

export default SidebarOptions;