import React from 'react';
import {
    IconButton
} from "@mui/material";

function SidebarOptions({icon,label,number,active}) {
  return (
    <div className={`sidebarOptions ${active && 'sidebarOptions-active'}`}>
        
            <IconButton>
                {icon}
            </IconButton>
        
            <h4>{label}</h4>
        
            <span>{number}</span>
        
    </div>
  )
}

export default SidebarOptions;