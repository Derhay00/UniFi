import React from 'react';

const AccessPointDesigns = () => {
  return (
    <div className="text-center py-10 px-6"> {/* Added padding on the sides */}
      <h2 className="text-4xl font-semibold mb-2">Thoughtful Access Point Designs</h2>
      <p className="text-xl text-gray-500 mb-10">Tailored for each specific environment.</p>
      
      <div className="flex flex-col md:flex-row md:justify-center gap-4 max-w-[1020px] mx-auto"> {/* Added responsive flex direction and spacing */}
        
        {/* Left large image/video */}
        <div className="w-full md:w-[50%]">
          <div className="relative bg-white rounded-lg overflow-hidden h-full">
            <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/flagship.vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 top-16 md:max-w-96 md:mx-auto max-w-72 mx-auto flex flex-col items-center"> {/* Adjusted top position */}
              <h3 className="lg:text-4xl text-3xl font-semibold text-white">Flagship</h3>
              <p className="text-gray-100 mt-2 text-sm">Ceiling-mounted for highest performance.</p>
            </div>
          </div>
        </div>

        {/* Right stacked images */}
        <div className="w-full md:w-[50%] flex flex-col gap-4">
          
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex-1">
            <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/in-wall.vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center"> {/* Adjusted top position */}
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">In-Wall</h3>
              <p className="text-gray-100 mt-2 text-sm">Wall-mounted for seamless installation.</p>
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex-1">
            <video autoPlay muted preload="none" loop className="w-full h-full object-cover">
              <source src="/outdoor.vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-x-0 top-6 md:max-w-96 md:mx-auto max-w-80 mx-auto flex flex-col items-center"> {/* Adjusted top position */}
              <h3 className="lg:text-4xl text-2xl font-semibold text-white">Flexible & Outdoor</h3>
              <p className="text-gray-100 mt-2 text-sm">Versatile deployment into any environment.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AccessPointDesigns;
