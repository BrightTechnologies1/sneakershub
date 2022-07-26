import React from 'react';
import '../App.css';
import '../css/collection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"

function Jordan () {

    return (
        <div className='container p-0 col-10'>
            <div className='row portfolio-item'>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='item col-4'>
                        
                </motion.div>
            </div>
        </div>
    );
}

export default Jordan;