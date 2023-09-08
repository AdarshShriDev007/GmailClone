import React from 'react';
import { CheckBoxOutlineBlank, StarBorder, LabelOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isMailDetail } from "../../../features/mailSlice";

function EmailList({name,subject,message,time}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mailDetails = ()=>{
        dispatch(isMailDetail({
            name,
            subject,
            message,
            time   
        }));

        navigate("/mail");
    }

  return (
    <div className='emailList' onClick={mailDetails}>
        <div className='emailList-left'>
            <CheckBoxOutlineBlank />
            <StarBorder />
            <LabelOutlined />
            <span><b>{name}</b></span>
        </div>

        <div className='emailList-middle'>
            <div className='emailList-middle-msg'>
                <span><b>{subject}</b> - {message}</span>
            </div>
        </div>

        <div className='emailList-right'>
            <span>{time}</span>
        </div>
    </div>
  )
}

export default EmailList;