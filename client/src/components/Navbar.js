import React from 'react'
import {Link} from "react-router-dom"

import styled from "styled-components"

const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 5px 10px;
position: fixed;
width: 100%;
top: 0;
`
const Logo = styled.img`
width: 100px;
height : 60px;

`

const Navbar = () => {
    return (
        <Nav>

            <div>
                <Logo src="https://th.bing.com/th/id/OIP.WCX6T5B4HlDDFUDfbRkpqgHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                <SearchBox>
                <i class="fal fa-search"></i>
                <input type="search"  />
                </SearchBox>
            </div>
            
        </Nav>
    )
}

export default Navbar
