import React from "react";
import styled from "styled-components"
import Me from "../img/me.png"
import {Link} from "react-router-dom"
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export const HomePage = () => {
    
    return (
        <MainCont>
            <Content>
                <Picture src={Me}/>
                <Intro>Hey, I'm Mauricio.</Intro>
                <About>
                    <p>I build <BodyTag href="/Projects">projects</BodyTag> using React, Redux, and Node. Also skilled in HTML, JS, CSS, and Python + Flask. </p>
                    <p>I also like to <BodyTag href="/Writing">write</BodyTag>, make videos, skateboard, and make people laugh.</p>
                    <p>Currently learning Angular, and working on <BodyTag href="https://quackhire.com/">Quackhire.</BodyTag></p>
                </About>
                <Social>
                    <Tag href ="https://www.linkedin.com/in/mauricio-degregori/" target="_blank">
                        <FaLinkedinIn size="2rem"/>
                    </Tag>
                    <Tag href ="https://github.com/mdegregori1" target="_blank">
                        <FaGithub size="2rem"/>
                    </Tag>
                    <Tag href = "https://twitter.com/degregori_pe" target="_blank">
                        <FaTwitter size="2rem"/>
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
`
const BodyTag = styled.a`
text-decoration: none;
color: #1351a8;
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
width: 20rem;
height: 15rem;


`

const MainCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;

`
const Content = styled.div`

width: 60%;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Intro = styled.h3`
text-align: center;
width: 100%;
color: #F06A67;



`