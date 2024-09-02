
import Link from 'next/link'
import React from 'react'

const WelcomToSwitching  = () => {
  return (
    <>
    <div className="text-center py-10 pb-6"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">Thoughtful Innovations</h2>
      <Link href="/products/access-point" className='text-xs text-blue-600 hover:underline'>Shop Now</Link>
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/video.switch-2.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
       {/* part 2 */}
  
       <div className="text-center py-12 px-8"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">Designed For Scale</h2>
      
      
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/video.switch.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>




      {/* part 3 */}


      <div className="text-center py-12 px-8"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">Wonderfully Insightful</h2>
      
      
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto"> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/video.switch-3.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
  
  
    </>
  )
}

export default WelcomToSwitching 