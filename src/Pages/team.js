import React from 'react';
import Team from "../Components/teamCom";
import club_data from "../club_data.json";
import Ambassadors from '../Components/ambassadors';

const TeamPage = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <h1 className='text-blue-900 pt-12 text-3xl font-merriweather text-bold pb-4 pl-4'>Meet Our Team</h1>
          <div>
          <h1 className='p-6 text-bold text-2xl font-merriweather'>Current E-Boards</h1>
            <Team data={club_data} />
        </div>
        <div> 
        <h1 className='p-6 text-bold text-2xl font-merriweather'>Our Ambassadors</h1>
        <Ambassadors data={club_data}/>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
