import React from 'react';
import { CheckBoxOutlineBlank, StarBorder, LabelOutlined } from "@mui/icons-material";

function EmailList({name,subject,message,time}) {
  return (
    <div className='emailList'>
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