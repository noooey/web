import React from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';

export default function User() {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'>
                <button className="userAddButton" type='button'>Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://pbs.twimg.com/media/EsbxHKFVoAAxip_.jpg"
                        alt="usershowimg"
                        className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Hamging</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">hamging99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">2000.04.29</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationOn className='userShowIcon'/>
                        <span className="userShowInfoTitle">Seoul | Korea</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 123 456 78</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">hamging@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder='hamging99'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Fullname
                            </label>
                            <input
                                type="text"
                                placeholder='Ham ging'
                                className='userUpdateInput'
                                disabled
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Phone 
                            </label>
                            <input
                                type="text"
                                placeholder='+1 123 456 78'
                                className='userUpdateInput'
                                disabled
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder='hamging@gmail.com'
                                className='userUpdateInput'
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>
                                Address
                            </label>
                            <input
                                type="text"
                                placeholder='Seoul | Korea'
                                className='userUpdateInput'
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img
                                className='userUpdateImg'
                                src="https://pbs.twimg.com/media/EsbxHKFVoAAxip_.jpg"
                                alt="img"
                            />
                            <label htmlFor='file'>
                                <Publish  className='userUpdateIcon'/>
                            </label>
                            <input type='file' id='file' style={{ display: "none" }}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
