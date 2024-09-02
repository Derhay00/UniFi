import { Bold } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const MainDesign = () => {
  return (
    <div className="text-center py-10 px-6">
    <h2 className="text-4xl font-semibold mb-2">New Intergration</h2>
    <p className="text-xl text-gray-500 mb-10">Identity Mobile App Ready,An IT Manager's dream.</p>
    
    <div className="flex flex-col md:flex-row md:justify-center gap-4 max-w-[1020px] mx-auto">
      {/* Right stacked images */}

    <div className="w-full md:w-[35%] flex flex-col gap-4">
        <div className="relative bg-black rounded-lg overflow-hidden flex-1">
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
            <source src="/ev-charger.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
            <h3 className="lg:text-4xl text-2xl font-semibold text-white">EV Charger</h3>
          </div>
        </div>
        <div className="relative bg-black rounded-lg overflow-hidden flex-1">
          <Image src="/call-parking.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
            <h3 className="lg:text-4xl text-2xl font-semibold text-white">Effortless Call Parking</h3>
            
          </div>
        </div>

      </div>

      {/* Left large image/video */}
      <div className="w-full md:w-[65%]">
<div className="relative bg-blue-900 rounded-lg overflow-hidden h-[300px] md:h-full"> {/* Default mobile height of 300px */}
  <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
    <source src="/new-intergration.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-72 mx-auto flex flex-col items-center">
    <h3 className="lg:text-4xl text-3xl font-semibold text-white">Door Access</h3>
    
  </div>
</div>
</div>


      
      


      
      
    </div>
    <div className="w-full  flex flex-col md:flex-row md:justify-center py-4 gap-4 max-w-[1020px] mx-auto">
        
        <div className="relative bg-black rounded-lg overflow-hidden flex-1">
          <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
            <source src="/mobile-vpn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
            
          </div>
        </div>

        <div className="relative bg-black rounded-lg overflow-hidden flex-1">
        <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
            <source src="/desktop-vpn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
            
          </div>
        </div>

      </div>
  </div>
  )
}

export default MainDesign