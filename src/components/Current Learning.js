import React from 'react';
import '../WorkExperience.css'; // Import the CSS for styling

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Company A',
      position: 'Software Engineer',
      duration: 'January 2020 - Present',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js.',
        'Collaborated with the design team to implement UI/UX best practices.',
        'Optimized application performance and ensured scalability.'
      ]
    },
    {
      company: 'Company B',
      position: 'Junior Developer',
      duration: 'June 2018 - December 2019',
      responsibilities: [
        'Assisted in the development of e-commerce platforms.',
        'Implemented responsive web design using Bootstrap and CSS.',
        'Participated in code reviews and team meetings.'
      ]
    }
  ];

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <h3>{experience.position}</h3>
          <p className="company">{experience.company}</p>
          <p className="duration">{experience.duration}</p>
          <ul className="responsibilities">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
