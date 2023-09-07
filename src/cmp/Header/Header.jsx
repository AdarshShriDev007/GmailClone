import React from 'react';
import "./Header.css";
import {
    IconButton,
    Avatar
} from "@mui/material";
import {
    Menu,
    Search,
    ExpandMore,
    HelpOutline,
    Settings,
    Apps
} from "@mui/icons-material";

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <IconButton>
                <Menu />
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' alt='logo' />
        </div>

        <div className='header-middle'> 
            <div className='search-mail'> 
                <IconButton><Search /></IconButton>
                <input type='text' placeholder='Search mail' />
                <IconButton><ExpandMore /></IconButton>
            </div>  
        </div>

        <div className='header-right'>
            <IconButton>
                <HelpOutline />
            </IconButton>
            <IconButton>
                <Settings />
            </IconButton>
            <IconButton>
                <Apps />
            </IconButton>
            <IconButton>
                <Avatar />
            </IconButton>
        </div>

    </div>
  )
}

export default Header;