import Image from 'next/image'
import React from 'react'

const SwitchDesign = () => {
  return (
    <>
    <div className="text-center py-10 px-6">

    <h2 className="text-4xl font-semibold mb-10">One Interface, Many Form Factors</h2>
    

    <div className="w-full  flex flex-col md:flex-row md:justify-center py-4 gap-4 max-w-[1020px] mx-auto">
          
          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <Image src="/rack-mounted.61f4b337.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">Rack-Mounted</h3>
             
            </div>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <Image src="/wall-mountable.c01cabe2.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">Wall-Mountable</h3>
             
            </div>
          </div>

        </div>
      
      <div className="flex flex-col md:flex-row md:justify-center gap-4 max-w-[1020px] mx-auto">
        
        {/* Left large image/video */}
        <div className="w-full md:w-[65%]">
  <div className="relative bg-blue-900 rounded-lg overflow-hidden h-[300px] md:h-full"> {/* Default mobile height of 300px */}
  <Image src="/outdoor-switch.a07c049f.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
    <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-72 mx-auto flex flex-col items-center">
      <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">Outdoor-Ready</h3>
      
    </div>
  </div>
</div>


        {/* Right stacked images */}
        <div className="w-full md:w-[35%] flex flex-col gap-4">
          
          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
          <Image src="/weatherproof.9a6d9049.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />

            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">Weatherproof</h3>
              
            </div>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <Image src="/compact-desktop.d2f5b313.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-3xl text-xl font-semibold text-gray-600">Desktop</h3>
              
            </div>
          </div>

        </div>


        
        
      </div>


        </div>
    </>
  )
}

export default SwitchDesign