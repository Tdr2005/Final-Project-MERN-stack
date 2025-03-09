import React from 'react'

const VideoBanner = () => {
  return (
    <div className='rounded-md border-yellow-600 bg-yellow-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-yellow-600/80 pl-55'>
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8">
            {/* video section */}
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/voF1plqqZJA?si=A5-K0pV3Osf3q9-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='aspect-video w-full'></iframe>
            </div>
            {/* text section */}
            <div className='space-y-4 text-center md:text-left text-white'>
            <h1 className='text-4xl font-bold'>Watch Our Video</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, veniam, incidunt perspiciatis temporibus asperiores dolor voluptate ab, animi quod nihil. Voluptatem omnis, voluptate impedit commodi fugit ex quidem hic.</p>
            <button className='rounded-md border-yellow-600 px-4 py-2 text-sm transition-colors duration-300 hover:bg-yellow-600/80 !bg-white !text-black'>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoBanner
