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
                <Intro>Hey, I'm Mauricio Degregori.</Intro>
                <p>I'm a full-stack web developer who studied at Lambda School. While there, I built some projects using HTML/CSS/JS, React/Redux, NodeJS, Express, Python, and Flask. Feel free to, for some reason, read more about me here.</p>
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

const Tag = styled.a`
text-decoration: none;
color: black;

`

const Social = styled.div`
width: 20%;
display: flex;
justify-content: space-evenly;
align-items: center;

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


`