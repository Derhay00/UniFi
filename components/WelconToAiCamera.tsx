import Link from 'next/link'
import React from 'react'

const WelconToAiCamera = () => {
    return (
      <>
      <div className="text-center py-10 pb-6"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">Seamless Integration within UniFi</h2>
      <Link href="/products/access-point" className='text-xs text-blue-600 hover:underline'>Shop Now</Link>
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/camera-video.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
       {/* part 2 */}
  
       <div className="text-center py-12 px-8"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">A Smart, AI-Enhanced Interface</h2>
      <p className="text-sm text-gray-600 ">A constantly evolving set of AI-centric features keeps your organization safe.</p>
      
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/camera-video-2.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
  
  
  
  </>
      
    )
  }
export default WelconToAiCamera