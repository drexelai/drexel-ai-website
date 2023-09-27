import AboutUs from './Pages/about';
import club_data from './club_data.json';
import Homepage from './Pages/homepage';
import ResearchPage from './Pages/researchPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamPage from './Pages/team';
import ContactUsPage from './Pages/contactUs';
import ProjectPage from './Pages/projectPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage data={club_data.main} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path ="/about/purpose" element= {<AboutUs />}/>
          <Route path ="/about/team" element={<TeamPage />}/>
          <Route path ="/research" element= {<ResearchPage/>}/>
          <Route path ="/about/contact" element={<ContactUsPage />}/>
          <Route path ="/projects" element={<ProjectPage />}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
