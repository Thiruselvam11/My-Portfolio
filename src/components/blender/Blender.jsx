import React from 'react'
import './Blender.css';
import girld from '../../assets/girld.png';
import waterd from '../../assets/waterd.png';
import castled from '../../assets/castled.png';
import arch from '../../assets/arch.png';
import cyber from '../../assets/cyber.png';

const Blender = () => {
  return (
    <div className='blender'>
    <div className="blender-intro">3D---- PROJECTS ----3D</div>
    <div className="all-one">
        <img src={ girld } className="blender-img" alt="girldimg" />
        <img src={ waterd } className="blender-img1" alt="waterdimg" />
        <img src={ castled } className="blender-img2" alt="castledimg" />
        <img src={ arch } className="blender-img3" alt="archimg" />  
        <img src={ cyber } className="blender-img4" alt="cyberimg" />  
    </div>
</div>
  )
}

export default Blender