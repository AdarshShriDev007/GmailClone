import React from 'react';
import "./ComposeModal.css";
import { 
  Remove, 
  Height, 
  Close,
  ArrowDropDown,
  FormatColorText,
  AttachFile,
  Link,
  InsertEmoticon,
  NoteAdd,
  Photo,
  PhonelinkLock,
  Create,
  MoreVert,
  Delete
 } from "@mui/icons-material";

function ComposeModal() {
  return (
    <div className='compose'>
        <div className='compose-header'>
          <div className='compose-header-left'>
            <span>New message</span>
          </div>
          <div className='compose-header-right'>
              <Remove />
              <Height />
              <Close />
          </div>
        </div>

        <form>
            <div className='compose-body'>
                <div className='compose-bodyForm'>
                    <input type='email' placeholder='Reciepents'/>
                    <input type='text' placeholder='Subject'/>
                    <textarea rows="20" ></textarea>
                </div>
            </div>

            <div className='compose-footer'>
                <div className='compose-footer-left'>
                    <button type='submit'>
                        Send <ArrowDropDown />
                    </button>
                    <FormatColorText />
                    <AttachFile />
                    <Link />
                    <InsertEmoticon />
                    <NoteAdd />
                    <Photo />
                    <PhonelinkLock />
                    <Create />
                    <MoreVert />
                </div>
                <div className='compose-footer-right'>
                    <Delete />
                </div>
            </div>
        </form>
    </div>
  )
}

export default ComposeModal;