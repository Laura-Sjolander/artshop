import React from "react";
import styled from "styled-components";


const FooterStyled = styled.footer `
    width:100%
    padding: 10px 0 30 px;
    height: 60px;
    margin: auto;
    text-align:center;
    
    & p {
        font-size: 14 px; 
        font-family: Arial, Helvetica, sans-serif;
        
    }`

const Footer = () => {

return (
    <FooterStyled>
        <p>Made by Laura</p>
        </FooterStyled>
);
};

  
export default Footer
