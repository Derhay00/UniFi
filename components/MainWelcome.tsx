import Link from 'next/link'
import React from 'react'

const MainWelcome = () => {
  return (
    <>
    <div className="text-center  pb-6"> {/* Added padding on the sides */}
      <h2 className="text-5xl font-semibold mb-2">Step into the Future of Networking</h2>
      <Link href="/products/access-point" className='text-xs text-blue-600 hover:underline'>Shop Now</Link>
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto pb-24"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop playsInline className="w-full h-full object-cover">
                <source src="/hero-video1.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
      
  
     
  
  
    </>
  )
}

export default MainWelcome;