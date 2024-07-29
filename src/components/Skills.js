import React from 'react';
import SqlIcon from '../icons/sql.svg';
import JavaIcon from '../icons/java.svg';
import LinuxIcon from '../icons/linux.svg';
import JiraIcon from '../icons/jira.svg';
import PythonIcon from '../icons/python.svg'
function Skills() {
  return (
    <>
    <div className="skills-section">
    <h1>SKills</h1>
      </div>
      <div className='icons2'>
        <div><img src={SqlIcon} alt="SQL" /> </div>
        <div><img src={JavaIcon} alt="Java" /></div>
        <div><img src={LinuxIcon} alt="Linux" /> </div>
        <div><img src={JiraIcon} alt="Jira" /> </div>
        <div><img src={PythonIcon} alt="Python" /> </div>
      </div>
    </>
    
  );
  
}

export default Skills;
