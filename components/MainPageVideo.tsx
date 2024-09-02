import Link from 'next/link'
import React from 'react'

const MainPageVideo = () => {
  return (
    <>
    <div className="text-center pt-24 pb-6"> {/* Added padding on the sides */}
      <h2 className="text-5xl font-semibold mb-2">Navigating the Unifi Dashboard</h2>
      <p className='text-md text-gray-800 '>Simplifying Your Network Management</p>
       </div>
  
  
      <div className="flex flex-col md:flex-row md:justify-center  max-w-[1020px] mx-auto "> 
        
        <div className='rounded-lg overflow-hidden'> 
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
                <source src="/use-dashboard.mp4" type="video/mp4" />
      </video>
      </div>
     
  
      </div>
  
      
  
     
  
  
    </>
  )
}

export default MainPageVideo