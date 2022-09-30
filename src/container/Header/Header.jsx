import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import axios from 'axios';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {


  
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("https://python-backend-zs.herokuapp.com/item/get/1").then(response => response.json()).then((res2) => {
      setUrl(res2.item_img);
    })
    
    
  }, [])
  

  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app_flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className='p-text'>Hello I'm</p>
              <h1 className='head-text'>Zach</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Full Stack Developer</p>
          <p className='p-text'>US ARMY Veteran</p>

          </div>
        </div>
      </motion.div>


      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      >
        <img src={url} alt="profile_bg" />
        <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt='profile_circle'
        className='overlay_circle'
        />


        
      </motion.div>

      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className='app__header-circles'
      >
        {[images.javascript, images.react, images.python].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');