import Image from 'next/image';
import React from 'react';

const CameraDesign = () => {
  return (
    <div className="text-center py-10 px-6">
      <h2 className="text-4xl font-semibold mb-2">Industry-Leading Mobile App Experience</h2>
      <p className="text-xl text-gray-500 mb-10">Powerful features and thoughtful design that eliminates the learning curve.</p>
      
      <div className="flex flex-col md:flex-row md:justify-center gap-4 max-w-[1020px] mx-auto">
        
        {/* Left large image/video */}
        <div className="w-full md:w-[65%]">
  <div className="relative bg-blue-900 rounded-lg overflow-hidden h-[300px] md:h-full"> {/* Default mobile height of 300px */}
    <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
      <source src="/camera-2.vid.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-72 mx-auto flex flex-col items-center">
      <h3 className="lg:text-4xl text-3xl font-semibold text-white">AI Theta</h3>
      <p className="text-gray-100 mt-2 text-sm">Discreet form factor ideal for interior design.</p>
    </div>
  </div>
</div>


        {/* Right stacked images */}
        <div className="w-full md:w-[35%] flex flex-col gap-4">
          
          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/camera-3.vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">AI 360</h3>
              <p className="text-gray-100 mt-2 text-sm">Complete 360° coverage, day or night.</p>
            </div>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <Image src="/camera-img.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">Viewport</h3>
              <p className="text-gray-100 mt-2 text-sm">Seamless streaming on HDMI displays.</p>
            </div>
          </div>

        </div>


        
        
      </div>
      <div className="w-full  flex flex-col md:flex-row md:justify-center py-4 gap-4 max-w-[1020px] mx-auto">
          
          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/camera-video-3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">G4 PTZ</h3>
              <p className="text-gray-100 mt-2 text-sm w-72">4K camera with 22x optical zoom, adaptive IR LED night vision, and automatic tracking.</p>
            </div>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden flex-1">
            <Image src="/camera-img-2.jpg" alt='camera' width={1000} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center">
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">G5 Pro with Vision Enhancer</h3>
              <p className="text-gray-100 mt-2 text-sm">Long-range night vision with an intense floodlight.</p>
            </div>
          </div>

        </div>
    </div>
  );
};

export default CameraDesign;
