import React from 'react';
import '../App.css';
import '../css/hero.css';
import bg from "../images/background.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"
import { Facebook, Twitter, EnvelopeFill, Instagram} from 'react-bootstrap-icons';

function Hero() {
    return (
        <div className='hero container col-12'>
            <div className='row'>
                <motion.div initial={{ x: -100}} animate={{ x: 0}} transition={{ type: "spring", stiffness: 200 }} className='hero-text col-lg-6 col-md-12'>
                    <h1>SNEAKERS</h1>
                    <h2>HUB</h2>
                    <h3>Get different types of sneakers (nike, jordan, airmax, allstars)</h3>
                    <div className='row'>
                        <div className='search'>
                            <input type="text" placeholder="Enter email" name='Email'></input>
                            <button type='submit'>Subscribe</button>
                        </div>
                    </div>
                    <div className='social'>
                        <a href='https://github.com/BrightTechnologies1' target='_blank'><span><Facebook /></span></a>
                        <a href='https://twitter.com/OlumideSilas' target='_blank'><span><Twitter /></span></a>
                        <a href='' target='_blank'><span><Instagram /></span></a>
                        <a href='' target='_blank'><span><EnvelopeFill /></span></a>
                    </div>
                </motion.div>

                <motion.div initial={{ y: -100}} animate={{ y: 0}} transition={{ type: "spring", stiffness: 200 }} className='hero-image col-lg-6 col-md-12'>
                    <img src={bg} alt=''></img>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;