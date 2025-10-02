 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
