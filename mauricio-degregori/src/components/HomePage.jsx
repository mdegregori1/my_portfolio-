import React from "react";
import styled from "styled-components"
import Me from "../img/me.png"

export const HomePage = () => {
    
    return (
        <MainCont>
            <Content>
                <Picture src={Me}/>
                <Intro>Hey, I'm Mauricio.</Intro>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, provident iure? Dolore iure sint at. Cumque sapiente, temporibus repellat aspernatur ipsa consequatur ratione cupiditate error, ut, sequi minima exercitationem harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cum enim quo incidunt temporibus laboriosam, accusantium vero? Pariatur omnis distinctio delectus eius minus dolore fugit! Qui omnis veniam sit provident.</p>
            </Content>

        </MainCont>
    )
}

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