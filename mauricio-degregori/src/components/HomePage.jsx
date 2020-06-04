import React from "react";
import styled from "styled-components"
import CartoonMe from "../img/cartoonme.png"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export const HomePage = () => {
    
    return (
        <MainCont>
            <Content>
                <Picture src={CartoonMe}/>
                <Intro>Hey, I'm Mauricio.</Intro>
                <About>
                    <p>I build <BodyTag href="/Projects">projects</BodyTag> using React, Redux, and Node. Also skilled in HTML, JS, CSS, and Python + Flask. </p>
                    <p>I like to <BodyTag href="/Writing">write</BodyTag>, make videos, skateboard, and make people laugh.</p>
                    <p>Currently learning Angular, and working on <BodyTag href="https://quackhire.com/">Quackhire.</BodyTag></p>
                </About>
                <Social>
                    <Tag href ="https://www.linkedin.com/in/mauricio-degregori/" target="_blank">
                        <FaLinkedinIn size="2rem" color="#ffffff"/>
                    </Tag>
                    <Tag href ="https://github.com/mdegregori1" target="_blank">
                        <FaGithub size="2rem" color="#ffffff"/>
                    </Tag>
                    <Tag href = "https://twitter.com/degregori_pe" target="_blank">
                        <FaTwitter size="2rem" color="#ffffff"/>
                    </Tag>
                </Social>
            </Content>

        </MainCont>
    )
}

const About = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #ffffff;
`
const BodyTag = styled.a`
text-decoration: none;
color: #BB86FC;
`
const Tag = styled.a`
text-decoration: none;
color: black;

`

const Social = styled.div`
width: 20%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin-top: 1%;
padding: 1%;

`
const Picture = styled.img`
width: 15rem;
height: 15rem;


`

const MainCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background: #2a3439;

`
const Content = styled.div`

width: 60%;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 4px solid #36454F;
border-radius: 30px;

`

const Intro = styled.h3`
text-align: center;
width: 100%;
color: #BB86FC;



`