import React from 'react';
import "./Project.css";
import fizzy from '../../assets/fizzy.jpg';
import newone from '../../assets/newone.jpg';
import tech from '../../assets/tech.jpg';
import apple from '../../assets/apple.jpg';

const Project = () => {
  return (
    <div className='project'>
    <div className="project-intro">---- PROJECTS ----</div>
    <div className="all-one">
        <img src={ fizzy } className="profile-img" alt="fizzy ui" />
        <img src={ newone } className="profile-img1" alt="newone ui" />
        <img src={ tech } className="profile-img2" alt="tech ui" />
        <img src={ apple } className="profile-img3" alt="apple ui" />
    </div>
</div>
  )
}

export default Project;