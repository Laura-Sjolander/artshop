import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const ContactSection = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
position: relative;
`

const ContactCard = styled.article`
position: relative;
flex: 25%; 
display:flex;
text-align: center;
justify-content:flex-start;
flex-direction:column; 
padding: 10px; 
max-width: 30vw; 
overflow:auto;`


// const ContactStyled = styled.div `
//    position: relative;
//    display: Flex;
//    flex: 25%;
//    justify-content: flex-start;
//    flex-direction: column;
//     padding: 10px 0 30 px;
//     height: 60px;
//     margin: auto;
//     text-align:center;
//     padding: 10px; 
//     max-width: 30vw; 
    
    
//     & p {
//         font-size: 14 px; 
               
//     }`


const Contact = () => {

return (
    <ContactSection>
        <ContactCard>
        <h1>Contact me</h1>
        <p>Here is my contact details.
            The easiest way to reach me is through my Instagram...</p>
            </ContactCard>
        </ContactSection>
);
};
export default Contact

  

