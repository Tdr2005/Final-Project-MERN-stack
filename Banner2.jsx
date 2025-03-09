import React from 'react'
import Image from '../../assets/blogs/blog4.jpeg'

const Banner2 = () => {
  return (
    <div className='bg-slate-100 pl-45'>
          <div className="container md:h-[500] flex items-center justify-center py-10">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                {/* img container */}
                <div>
                    <img src={Image} alt="" className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl'/>
                </div>
                {/* text container */}
                <div className='lg:max-w-[400px] space-y-6'>
                    <h1 className='text-2xl  font-semibold md:text-4xl mb-4'>Help The Needy People</h1>
                    <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                        <li className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eos quia minus distinctio
                        </li>
                        <li className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit perferendis facere repellat dolorum 
                        </li>
                        <li className='font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus reprehenderit perferendis facer
                        </li>
                    </ul>
                    <button className='rounded-md border-yellow-600 bg-yellow-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-yellow-600/80'>Get Started</button>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Banner2
