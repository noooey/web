import React from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className="logo">lamaadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://i.pinimg.com/originals/5e/5c/bb/5e5cbb6a0334a96bf2fa1503b012b82b.jpg" alt="avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
