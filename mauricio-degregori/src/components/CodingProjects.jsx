import React from "react"
import styled from "styled-components"
import Me from "../img/me.png"

export const CodingProjects = () => {
    return (
        <>
        <h2>My Projects</h2>
        <AllProjects>
            <Pair>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae beatae excepturi iure, reprehenderit maxime natus porro est ex totam error modi numquam animi itaque quos ad sapiente perferendis, inventore sed!</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>
            </Pair>
            <Pair>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>
                <Project>
                    <h3>Project Name</h3>
                    <ProjectImage src={Me}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam sed, itaque vitae, qui beatae corrupti dolorum ad deserunt molestiae temporibus nostrum placeat aliquid repellat, excepturi quod a id quos.</p>
                    <button>Code</button>
                    <button>Deployed</button>
                </Project>


            </Pair>
        </AllProjects>
        </>
    )
}

let ProjectImage = styled.img`
width: 25rem;
`

let AllProjects = styled.div`
`

let Pair = styled.div`
border: 1px solid orange;
display: flex;
justify-content: space-evenly;
`

let Project = styled.div`
border: 1px solid blue;
padding: 1%;
width: 40%;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
`