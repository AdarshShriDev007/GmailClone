import React from 'react';
import "../Sidebar.css";
import {
    Button
} from "@mui/material";
import {
    Create
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { isMailOpen } from "../../../features/mailSlice";

function ComposeBtn() {

  const dispatch = useDispatch();

  return (
    <div className='composeBtn'>
        <Button startIcon={<Create />} className='compose-btn' onClick={()=>dispatch(isMailOpen())}>Compose</Button>
    </div>
  )
}

export default ComposeBtn;