import React from 'react';
import { useState, useEffect } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import Header from "../components/header.tsx";

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'; 
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import projects from "../assets/js/projects.js";

// import video from "../assets/videos/bg2.mp4";

type Project = {
  project: string,
  info: string,
  description: string,
  year: string,
  src: string,
  domain: string
}

function Index() {
  // define states
  // const [loading, setLoading] = useState(true)
  const [infoBox, setInfoBox] = useState<Partial<Project>>({});
  
  
  useEffect(() => {
    console.log('projects', projects);
    console.log('infoBox', infoBox);
  }, [projects, infoBox]);


const openInfoBox = (project) => {
  console.log('project', project);
  setInfoBox(project);
};

  return (

    <div>
      {/* {loading ? (
        <div className='start-loader'>Lucas H. Schuber</div>
      ) : ( */}
        <div>  
          <div className=''>
            <div className='inner-wrapper d-flex justify-content-between'>
              <div className='left-inner-wrapper'>
                <h5>Lucas H. Schuber</h5>
                <h6>Fullstack Developer & Digital Designer</h6>
                <hr />
                <Header />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
              >
                <div className='right-inner-wrapper'>
                  {projects && projects.map((project, index) => (
                    <div className='project' key={index}>
                      <FontAwesomeIcon icon={faCircleQuestion} className='info-icon mr-3' onMouseOver={() => openInfoBox(project)} onMouseOut={() => setInfoBox({})}/>
                        <span>{project.info} / {project.year}</span>
                        <a href={project.domain} target="_blank">{project.project}</a>

                      {infoBox.project === project.project && (
                          <div className='info-box' onMouseOver={() => openInfoBox(project)} onMouseOut={() => setInfoBox({})}>
                            <h6 className='title'>{infoBox.project}</h6>
                            <p className='description'>{infoBox.description}</p>
                            <img className='image' src={infoBox.src} width={350} alt={infoBox.project} />
                          </div>
                       )}

                    </div>
                  ))}
                </div>
              </motion.div>

              
            </div>
          </div>
         
        </div>
      {/* )} */}
    </div>
 
  );
}

export default Index;
