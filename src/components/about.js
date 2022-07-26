import React from 'react';
import '../App.css';
import aboutimg from "../images/about-img.jpg";
import Slider from './slider';
import { motion } from "framer-motion"
import '../css/about.css';
import { Facebook, Twitter, EnvelopeFill, Instagram} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function About () {

    return (
        <div className='about container'>
            <div className='row'>
                <motion.div initial={{ y: -100}} animate={{ y: 0}} transition={{ type: "spring", stiffness: 200 }} className='about-image col-lg-6 col-md-12'>
                    <img src={aboutimg} alt=''></img>
                    {/* <Slider /> */}
                </motion.div>
                
                <motion.div initial={{ x: -100}} animate={{ x: 0}} transition={{ type: "spring", stiffness: 200 }} className='about-text col-lg-6 col-md-12'>
                    <h2>ABOUT</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus nibh blandit feugiat. Non amet, faucibus volutpat tellus. Tristique urna faucibus et adipiscing sollicitudin. Varius vitae imperdiet donec nulla auctor eleifend dis commodo pellentesque.</h3>
                    <div className='social'>
                        <a href='https://github.com/BrightTechnologies1' target='_blank'><span><Facebook /></span></a>
                        <a href='https://twitter.com/OlumideSilas' target='_blank'><span><Twitter /></span></a>
                        <a href='' target='_blank'><span><Instagram /></span></a>
                        <a href='' target='_blank'><span><EnvelopeFill /></span></a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;