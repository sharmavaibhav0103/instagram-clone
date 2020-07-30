import React from 'react';
import { Link } from 'react-router-dom';

export const Signup = ({ text1, text2 }) => {
  const btnText = text2 === 'Login' ? '/' : '/signup';
  return(
    <div className="home-signup-box">
        <p>{text1} <Link to={btnText} style={{color: '#0275d8', textDecoration: 'none'}}> {text2}</Link></p>
        </div>
  )
}