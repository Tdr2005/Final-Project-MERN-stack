import React from 'react';
import HeroImg from "../../assets/image1.jpg";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    width: '100%', // Fixed typo
};

const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const Hero = () => {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        amount: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <div style={bgStyle}>
                <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-yellow-600/60 pt-3 pb-10 md:pt-48 justify-center items-center pl-45'>
                    <div className='container'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white'>
                            {/* Hero Text */}
                            <div className='flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]'>
                                <motion.h1 variants={FadeUp(0.2)} initial="initial" animate="animate" className='text-5xl lg:text-7xl font-bold'>Join Us in Changing Lives</motion.h1>
                                <motion.p variants={FadeUp(0.4)} initial="initial" animate="animate">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate rem numquam aut in sapiente quos, officia ratione quo autem enim deserunt nulla, tempora doloribus reprehenderit libero nihil delectus ducimus.</motion.p>
                                <div className='space-x-4'>
                                    <motion.button variants={FadeUp(0.6)} initial="initial" animate="animate" className='rounded-md border-yellow-600 bg-yellow-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-yellow-600/80'>Get Started</motion.button>
                                    <motion.button variants={FadeUp(0.2)} initial="initial" animate="animate" className='rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300'>Login</motion.button>
                                </div>
                            </div>
                            {/* Form section */}
                            <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{type: "spring", stiffness: 100}} className='w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md'>
                                <div>
                                    <h1 className='text-lg text-center font-semibold'>Quick Donation Form</h1>
                                    <div className='flex items-center justify-center gap-8 py-4'>
                                        <button onClick={()=> setData({ ...data, amount: 1 })} aria-label="Donate 10 Rs" className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>10 Rs</button>
                                        <button onClick={()=> setData({ ...data, amount: 10 })} aria-label="Donate 50 Rs" className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>50 Rs</button>
                                        <button onClick={()=> setData({ ...data, amount: 100 })} aria-label="Donate 100 Rs" className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>100 Rs</button>
                                        <button onClick={()=> setData({ ...data, amount: 1000 })} aria-label="Donate 1000 Rs" className='w-[50px] h-[50px] p-2 border-[1px] border-slate-300 rounded-md bg-gray-200 dark:bg-gray-900'>1000 Rs</button>
                                    </div>
                                    {/* Input section */}
                                    <div className='space-y-6'>
                                        <input type="number" name="amount" id="amount" onChange={handleChange} placeholder='Amount' defaultValue={1} value={data.amount} min={1} max={10000} className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black' />
                                        <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'/>
                                        <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black'/>
                                        <button className='rounded-full border-yellow-600 bg-yellow-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-yellow-600/80 w-full' onClick={handleSubmit}>
                                            Donate Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
