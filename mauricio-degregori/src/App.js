import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./components/HomePage"
import { NavBar } from "./components/NavBar"
import { CodingProjects } from "./components/CodingProjects"
import { MyWriting } from "./components/MyWriting.jsx"
import { AboutMe } from "./components/AboutMe"


function App() {
  return (
    <div>
       <NavBar/>
       <Route path = '/Home' component={HomePage}/>
       <Route path = '/Projects' component={CodingProjects}/>
       <Route path = '/Writing' component={MyWriting}/>
       <Route path = "/About" component={AboutMe}/>
    </div>
  )
}

export default App;
