import React from "react";
import styled from "styled-components"


export const NavBar = () => {
    return (
        <Container>
            <Name>
                <Me href="/Home">Mauricio Degregori</Me>
            </Name>
            <Tabs>
                <Categories href="/Projects">Projects</Categories>
                <Categories href="/About">About Me</Categories>
                <Categories href="/Writing">Writing</Categories>
            </Tabs>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
border-bottom: 1px solid #e6e6e6;
height: 8vh;
display: flex;
align-items: center;
justify-content: space-between;
`

const Tabs = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-around;
`

const Name = styled.div`
width: 70%;
display: flex;
align-items: center;

`

const Me = styled.a`
text-decoration: none;
margin-left: 2%;
font-weight: bold;
color: #F06A67;
`
const Categories = styled.a`
text-decoration: none;
color: #1351a8;
&:hover {
    color: #F06A67;
}

`