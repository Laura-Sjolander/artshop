import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";



const AboutStyled = styled.div `
    width:100%
    padding: 10px 0 30 px;
    height: 60px;
    margin: auto;
    text-align:center;
    
    & p {
        font-size: 14 px; 
        font-family: Arial, Helvetica, sans-serif;
        
    }`

    const BackbuttonStyled = styled.button `
    position: absolute;
    top-right; 20px;
    padding: 10px 0 30 px;
    height: 60px;
    margin: auto;
    text-align:center;
    
    & p {
        font-size: 14 px; 
        font-family: Arial, Helvetica, sans-serif;
        
    }`



const About = () => {
    const navigate = useNavigate()
    const onBackButtonClick = () => {
        navigate(-1);
    };


return (
    <AboutStyled>
        <h1>About the artist</h1>
        <p>I am a hobby artist that have ...</p>
        <button onClick={() => onBackButtonClick()}>BACK</button>
        </AboutStyled>
);
};

  
export default About
