import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const AboutSection = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
position: relative;
`

const AboutCard = styled.article`
position: relative;
//flex: 25%; 
display:flex;
text-align: center;
justify-content:flex-start;
flex-direction:column; 
padding: 10px; 
max-width: 30vw; 
overflow:auto;`

const AboutStyled = styled.div `
    width:100%
    padding: 10px 10px 30px;
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
    
    <AboutSection>
        <AboutCard>
        <h1>About the artist</h1>
        <p>I have been passionate about art my whole life. 
            Vedic Art, Intuitive painting and Abstract are some of the courses I have participated in and I feel this my way of expression.
            There needs to be freedom of expression and not so much pixel perfect artistry, for me to be able to create.
            I seldom know what I am about to paint, the motive emerges itself unto the canvas. 
            Joined a collaboration exhibition in Vallentuna 2018.
            </p>
            </AboutCard>
            </AboutSection> 
           
);
};

  
export default About
