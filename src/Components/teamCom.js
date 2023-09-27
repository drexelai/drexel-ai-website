import React from 'react';

const Team = (props) => {
  return (
    <div className="flex flex-wrap justify-left">
      {props.data.team.skills.map((person, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={"../../team/" + person.image}
              alt={person.name}
              className="w-40 h-40  mb-4"
              style={{ borderRadius: '20%' }} // Add border radius style
            />
            <h2 className="text-lg font-bold">{person.name}</h2>
            <p className="text-sm">{person.position}</p>
            <p className="text-xs text-gray-500">
              {person.major} - {person.grade}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;