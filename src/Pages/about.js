import React from 'react';
import Navbar from '../Components/navbar';
import PurposeComponent from '../Components/purpose';
import club_data from '../club_data.json';
import TeamPage from './team';
import ContactUsPage from './contactUs';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '75%' }}>
          <PurposeComponent data={club_data.main} />
          <TeamPage/>
          <ContactUsPage/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
