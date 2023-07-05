import React, { useState } from 'react';
import "./accordian.css";

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sections = [
    {
      title: 'Course Content',
      content: 'Content for section 1',
    },
    {
      title: 'The Brief',
      content: 'Content for section 2',
    },
    // Add more sections as needed
  ];

  return (
    <div>
        {sections.map((section, index) => (
        <div className='outerAccordian' key={index}>
            <div
            onClick={() => setActiveSection(index)}
             className='outerHeadingAcco'
            >
                <h3>{section.title}</h3>
                <span>5 lectures • 87 min</span>
            </div>
            {activeSection === index && <div className='contentDataAccor'>{section.content}</div>}
        </div>
        ))}
  </div>
  );
};

export default Accordion;