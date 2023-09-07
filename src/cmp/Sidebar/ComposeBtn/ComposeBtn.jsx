import React from 'react';
import "../Sidebar.css";
import {
    Button
} from "@mui/material";
import {
    Create
} from "@mui/icons-material";

function ComposeBtn() {
  return (
    <div className='composeBtn'>
        <Button startIcon={<Create />} className='compose-btn'>Compose</Button>
    </div>
  )
}

export default ComposeBtn;