 
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
