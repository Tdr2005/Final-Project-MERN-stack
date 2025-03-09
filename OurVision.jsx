import { animate ,motion } from 'framer-motion'
import React from 'react'

const fadeAnimation = (delay) => {
    return{
        initial:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                delay:delay,
                duration:0.6,
                ease:'easeInOut',
        },
    },
}}
const OurVision = () => {
  return (
    <div className='container my-16 bg-white pl-45'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <motion.div variants={fadeAnimation(0.2)} initial="initial" whileInView='animate' className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 '>
                <h1 className='text-xl font-semibold'>Our Vision</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed delectus, maxime beatae veritatis laudantium repellat perspiciatis culpa vitae facere hic vero officia. In corporis harum tenetur iste, voluptas expedita voluptates!</p>
                <a href="#" className='inline-block hover:text-yellow-600 border-b hover:border-yellow-600'>Learn More</a>
            </motion.div>
            <motion.div variants={fadeAnimation(0.4)} initial="initial" whileInView='animate' className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-800 '>
                <h1 className='text-xl font-semibold'>Our Vision</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed delectus, maxime beatae veritatis laudantium repellat perspiciatis culpa vitae facere hic vero officia. In corporis harum tenetur iste, voluptas expedita voluptates!</p>
                <a href="#" className='inline-block hover:text-yellow-600 border-b hover:border-yellow-600'>Learn More</a>
            </motion.div>
        </div>
    </div>
  )
}

export default OurVision
