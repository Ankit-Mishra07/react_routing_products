import React from 'react'
import {Link} from "react-router-dom"

import styled from "styled-components"

const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding:5px 10px;
position: fixed;
width: 100%;
top: 0;
left: 0;
right: 0;
border-bottom: 1px solid lightgray;
background-color: #B1D0E0;
align-items: center;
`

const Div1 = styled.div`
display: flex;
width: 40%;
justify-content: space-between;


`
const Logo = styled.div`
padding: 10px;
font-size: 20px;
border: 3px solid #1A374D;
color: #406882;
text-decoration: none;
font-weight: 600;
`

const Div2 = styled.div`
display: flex;
justify-content: space-around;
width: 25%;
padding: 0 20px;

`


const link = 
    {color: "#1A374D", textDecoration:"none", fontWeight : "600"}

// const SearchBox = styled.div`
// display: flex;
// border: 1px solid lightgray;
// box-shadow:-0.5px -0.5px 2px 0.6px rgba(0, 0, 0, 0.2),2px 2px 2px 0.2px rgba(0, 0, 0, 0.2) ;
// `


const Navbar = () => {
    return (
        <Nav>
            <Link to="/" style={link}>
            <Div1>
                <Logo>BRAND</Logo>
            </Div1>
            </Link>
            <Div2>
                <Link style={link}  to="/">HOME</Link>
                <Link style={link} to="products">PRODUCTS</Link>
                <Link style={link} to="/login">LOGIN</Link>
            </Div2>
            
        </Nav>
    )
}

export default Navbar
