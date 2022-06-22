import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";


const ContactStyled = styled.div `
    width:100%
    padding: 10px 0 30 px;
    height: 60px;
    margin: auto;
    text-align:center;
    
    & p {
        font-size: 14 px; 
               
    }`

const Contact = () => {

return (
    <ContactStyled>
        <h1>Contact me</h1>
        <p>Here is my contact details ...</p>
        </ContactStyled>
);
};
export default Contact

  

