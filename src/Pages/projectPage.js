import React from "react";
import Project from "../Components/projects";
import Navbar from "../Components/navbar";
import club_data from '../club_data.json';

const ProjectPage = () => {
  return (
    <div>
    <Navbar/>
    <div style={{width:"90%", margin:'auto'}}>
    <Project data={club_data}/>
    </div>
    </div>
  );
};

export default ProjectPage;
