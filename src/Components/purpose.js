import React from "react";


const PurposeComponent = (props) => {
  //Function which makes a list of our "what we do points"
  const renderList = (list) => {          
    return list.map((item, index) => (
      <li key={index} className="list-disc ml-4">
        {item}
      </li>
    ));
  };
  
  return (
    <div>
      <div>
        <h1 className="text-2xl pt-8 pb-4 text-bold font-merriweather">Who We Are</h1>
        <p  className="text-lg">{props.data.AboutUS.whoWeAre}</p>
      </div>
      <div>
        <h1 className="text-2xl pt-8 pb-4 text-bold font-merriweather">Mission</h1>
        <p className="text-lg">{props.data.AboutUS.mission}</p>
      </div>
      <div>
        <h1 className="text-2xl pt-8 pb-4 text-bold font-merriweather">What We Do</h1>
        <ul className="list-inside text-lg">{renderList(props.data.AboutUS.WhatWeDo)}</ul>
      </div>
      <div>
        <p className=" pt-8 pb-4  text-lg">{props.data.AboutUS.last}</p>
      </div>
    </div>
  );
};

export default PurposeComponent;
