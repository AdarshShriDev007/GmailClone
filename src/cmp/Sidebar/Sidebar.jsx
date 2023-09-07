import React from 'react';
import "./Sidebar.css";
import ComposeBtn from './ComposeBtn/ComposeBtn';
import SidebarOptions from './SidebarOptions/SidebarOptions';
import {
  Inbox,
  StarRate,
  WatchLater,
  LabelImportant,
  Send,
  Drafts,
  Label,
  Delete,
  FindInPage,
  ExpandMore
} from "@mui/icons-material";

function Sidebar() {
  return (
    <div className='sidebar'>
        <ComposeBtn />
        
        <SidebarOptions icon={<Inbox />} label={"Inbox"} number={224} />
        <SidebarOptions icon={<StarRate />} label={"Starred"} number={224} />
        <SidebarOptions icon={<WatchLater />} label={"Snoozed"} number={224} />
        <SidebarOptions icon={<LabelImportant />} label={"Important"} number={224} />
        <SidebarOptions icon={<Send />} label={"Sent"} number={224} />
        <SidebarOptions icon={<Drafts />} label={"Drafts"} number={224} />
        <SidebarOptions icon={<Label />} label={"Category"} number={224} />
        <SidebarOptions icon={<Delete />} label={"[Map]/Trash"} number={224} />
        <SidebarOptions icon={<FindInPage />} label={"Documents"} number={224} />
        <SidebarOptions icon={<ExpandMore />} label={"More"} number={224} />
        
    </div>
  )
}

export default Sidebar;