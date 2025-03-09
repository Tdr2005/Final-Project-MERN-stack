import React from 'react'
import CountUp from "react-countup"
import { motion } from "framer-motion"

const OverviewCounter = () => {
  return (
    <motion.section initial={{opacity:0, x:100}} animate={{opacity:1, x:0}} transition={{type: "spring", stiffness: 100}} className="container h-12 md:h-32 p-3 pl-75">
      <div className='mx-auto my-4 grid w-full grid-cols-4 divide-x divide-slate-700 bg-white p-2 shadow-lg md:max-w-[800px] lg:-translate-y-20 md:p-8'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-bold text-black sm:text-lg md:text-3xl'>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} start={0} end={234} suffix='+' duration={2.75}/>
            </p>
            <p className='sm:text-md text-xs md:text-lg'>Fundraisers</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-bold text-black sm:text-lg md:text-3xl'>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} start={0} end={56} suffix='+' duration={2.75}/>
            </p>
            <p className='sm:text-md text-xs md:text-lg'>Raised</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-bold text-black sm:text-lg md:text-3xl'>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} start={0} end={234} suffix='k+' duration={2.75}/>
            </p>
            <p className='sm:text-md text-xs md:text-lg'>Donations</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-bold text-black sm:text-lg md:text-3xl'>
                <CountUp enableScrollSpy={true} scrollSpyOnce={true} start={-875.039} end={160527.012} suffix='+' duration={2.75}/>
            </p>
            <p className='sm:text-md text-xs md:text-lg'>Volunteers</p>
        </div>
      </div>
    </motion.section>
  )
}

export default OverviewCounter
