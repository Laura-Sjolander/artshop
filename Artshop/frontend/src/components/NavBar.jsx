import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'

const Nav = styled.nav`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 10px;
     a:link {
        text-decoration: none
        
     };

     a.active {
        background-color:#4916EA;
        color: white;
     }
     
`
const Ul = styled.ul`
        padding: 0;
        margin: 0;
        list-style-type: none;
        
    `

const Li = styled.div`
     display: inline-block;
     margin-left: 10px;
     a:link {
        text-decoration: none
     };
    `
export const NavBar = () => {
    return (
        <Nav>
            <h1>
                <NavLink to ="/">Home</NavLink>
                </h1>
                <Ul>
                    <Li>
                        <NavLink to = "/about">About</NavLink>
                    </Li>
                    <Li>
                        <NavLink to = "/contact">Contact</NavLink>
                    </Li>
                </Ul>
        </Nav>
    )
}