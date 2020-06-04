import React from "react"
import styled from "styled-components"
import Me from "../img/me.png"

export const CodingProjects = () => {
    return (
        <AllProjects>
            <Pair>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>
                <Project>
                    <Name>Project Name</Name>
                    <ProjectImage src={Me}/>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</Description>
                    <ButtonDiv>
                        <Button>Code</Button>
                        <Button>Deployed</Button>
                    </ButtonDiv>
                </Project>

            </Pair>
        </AllProjects>

    )
}

let ButtonDiv = styled.div`
width: 25rem;
display: flex;
justify-content: space-evenly;
align-items: center;

`

let Button = styled.button`
color: #ffffff;
background: #BB86FC;
border: #BB86FC;
padding: 2%;
width: 40%;
border-radius: 15px;
font-weight: bold;
&:hover {
    background: #9742ff;
}
`
let Description = styled.p`
color: #ffffff;
text-align: justify;
width: 25rem;
padding: 1%;
`
let Name = styled.h3`
color: #BB86FC;
`
let ProjectImage = styled.img`
width: 25rem;
`

let AllProjects = styled.div`
background: #2a3439;
padding: 5%;
`

let Pair = styled.div`
display: flex;
justify-content: space-evenly;
`

let Project = styled.div`
border: 4px solid #36454F;
border-radius: 30px;
margin: 1%;
padding: 1%;
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`