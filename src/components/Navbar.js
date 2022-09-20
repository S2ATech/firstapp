import React,{useState} from 'react';
import { FaHome,FaDiscourse,FaAtlas,FaCog,FaUserTie,FaCommentAlt,FaAward,FaBriefcase } from "react-icons/fa";
import {MdDoubleArrow,MdLogout} from 'react-icons/md';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { auth } from '../ChatConfig.js';
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const HandleToggle = () => {
  setOpen(!open);
  }
  return (
    <div  style={open?  {width:'60px'} : {width:'180px'}} className= "sidebar">
    <div onClick={HandleToggle} style={open? {width: '60px'} : {width: '180px'} } className= "nav-top">
      <div style={open? {display:'none'}  : {display:'block'}} className='logo-top'>
          <img src="./images/logo.png" alt="Logo" />
      </div>
      <div onClick={HandleToggle} className={open? 'nav-btn' : 'btn-nav'}>
          <MdDoubleArrow  style={open?  {left:'20px'} : {left:'150px'}} onClick={HandleToggle} />
       </div>
    </div>
    <br />
    <div  className='nav-center'>
      <ul>
        <li><Link className='link-nav' to="/"><FaHome className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>DashBoard</span></Link></li>
        <li><Link className='link-nav' to="/message"><FaDiscourse className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Message</span></Link></li>
        <li><Link className='link-nav' to="/cours"><FaAtlas className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Cours</span></Link></li>
        <li><Link className='link-nav' to="/challenges"><FaAward className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Challenges</span></Link></li>
        <li><Link className='link-nav' to="/outils"><FaBriefcase className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Outils</span></Link></li>
        <li><Link className='link-nav' to="/conseil"><FaCommentAlt className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Conseil</span></Link></li>
        <li><Link className='link-nav' to="/setting"><FaCog className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Setting</span></Link></li>
        <li><Link className='link-nav' to="/profil"><FaUserTie className='icon-nav' /><span style={open? {display:'none'}  : {display:'block'}}>Profil</span></Link></li>
      </ul>
    </div>
    <div className="batton">
    <div className="nav-batton" >
   < MdLogout onClick={()=> signOut(auth)} /><span style={open?  {display:'none'} :  {display:'block'}}>LogOut</span>
    </div>
    </div>
</div>
  )
}

export default Navbar
