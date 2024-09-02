import Link from 'next/link'
import React from 'react'

const WelcomToUnifi = () => {
  return (
    <>
    <div className="text-center py-10 px-6"> {/* Added padding on the sides */}
    <h2 className="text-4xl font-semibold mb-2">Welcome to UniFi 7</h2>
    <p className="text-sm text-gray-600 ">A massively scalable WiFi 7 platform capable of delivering wired-like user experiences.</p>
    <Link href="/products/access-point" className='text-xs text-blue-600 hover:underline'>Shop Now</Link>
     </div>


    <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
      
      <div className='rounded-lg overflow-hidden'> 
        <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/u7-pro.vid.mp4" type="video/mp4" />
    </video>
    </div>
   

    </div>

     {/* part 2 */}

     <div className="text-center py-10 px-6"> {/* Added padding on the sides */}
    <h2 className="text-4xl font-semibold mb-2">Take Your WiFi to Massive Scale</h2>
    <p className="text-sm text-gray-600 ">Start with one AP and effortlessly scale to hundreds.</p>
    
     </div>


    <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
      
      <div className='rounded-lg overflow-hidden'> 
        <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/u7-pro-2.vid.mp4" type="video/mp4" />
    </video>
    </div>
   

    </div>




</>
    
  )
}

export default WelcomToUnifi