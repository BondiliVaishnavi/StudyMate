import React from 'react';
import '../Header/header.css';
import  Logo from '../../assets/images/logo.jpeg';
import { MdPeopleAlt } from "react-icons/md";
import {Link } from "react-router-dom";
const header =()=>{
    return (
        <>
        <header className='header'>
            <div className='headerleft'>
                <a  id='logo'href='#'><img src={Logo} /></a>
            </div>
            <div className='header-right'>
            <Link to="/Login"><button href='#' id='login'> Login</button> </Link>
               <Link to='/aboutus'>  <a href='#' id='about-us'> <MdPeopleAlt size={20} />About us </a></Link>
               
               
                
            </div>
        </header>
        </>
    )
}
export default header;