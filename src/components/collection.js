import React from 'react';
import { useState } from 'react';
import '../App.css';
import { motion } from "framer-motion"
import '../css/collection.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Star, StarFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image1 from '../images/image1.jpg'

function Collection () {

    const [key, setKey] = useState('collection');

    return (
        <div className='collection container'>
            <div className='row'>
                <div className='collection-head '>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} defaultActiveKey="Nike" className="mb-3">
                        <Tab eventKey="Nike" title="Nike" className='col'>
                            <div className='container p-0 col-10'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Jordan" title="Jordan" className='col'>
                            <div className='container p-0 col-10'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Converse" title="Converse" className='col'>
                            <div className='container p-0 col-10'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Puma" title="Puma" className='col'>
                            <div className='container p-0 col-10'>
                                <div className='row collection-item'>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image1} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image2} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>    
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                                        <img src={image3} alt=''></img>
                                        <div className='icon'><StarFill /></div>
                                        <h1>Airforce Retro 356x</h1>   
                                    </motion.div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Collection;