import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'

const TabsCamera = () => {
  return (
    <Tabs defaultValue="technical_specification" className=" w-full flex flex-col items-center">
      <TabsList className='gap-2 pb-44 sm:pb-12  flex flex-wrap justify-center'>
        <TabsTrigger 
          value="product" 
          className='data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-30 hover:bg-blue-200 py-4 px-6 sm:px-4 rounded-md transition duration-200 ease-in-out'
        >
          Product
        </TabsTrigger>
        <TabsTrigger 
          value="technical_specification" 
          className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-30 hover:bg-blue-200 py-4 px-6 rounded-md transition duration-300 ease-in-out'
        >
          Technical Specification
        </TabsTrigger>
        <TabsTrigger 
          value="deployment" 
          className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-30 hover:bg-blue-200 py-4 px-6 rounded-md transition duration-300 ease-in-out'
        >
          Deployment
        </TabsTrigger>
        <TabsTrigger 
          value="in_the_box" 
          className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-30 hover:bg-blue-200 py-4 px-6 rounded-md transition duration-300 ease-in-out'
        >
          In The Box
        </TabsTrigger>
        <TabsTrigger 
          value="build_features" 
          className='data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-30 hover:bg-blue-200 py-4 px-6 rounded-md transition duration-300 ease-in-out'
        >
          Build Features
        </TabsTrigger>
      </TabsList>

      <TabsContent value="product" className="flex flex-col items-center w-full px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 ">
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F122343d5-ef5f-4757-939e-8c3cbb4bec5f.png&q=75&w=1920" 
        alt="Product Image 1" 
        width={500} 
        height={500} 
        
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2Fe724ecd0-358d-48ae-a9c8-d331dc6990a9.png&q=75&w=1920" 
        alt="Product Image 4" 
        width={500} 
        height={500} 
        
      />
    </div>

    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2Fcd73967c-31e6-4d8b-a1ea-6d3bcf4c077a.png&q=75&w=1920" 
        alt="Product Image 3" 
        width={500} 
        height={500} 
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F709f5a9f-5957-4009-a90e-57fcdb9ac596.png&q=75&w=1920" 
        alt="Product Image 2" 
        width={500} 
        height={500} 
        
      />
    </div>
    
    
    
  </div>
</TabsContent>

      <TabsContent value="technical_specification" className="flex flex-col  px-4 lg:w-[1080px] md:w-[760px] sm:w-[640px] ">
      <div className=''>
  <Link href="https://dl.ui.com/qig/uvc-ai-pro-white/#index" className='text-blue-500 text-sm hover:underline'>
    Installation Guide
  </Link>
  <div className='mt-4 '>
    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold'>Mechanical</h1>
    <div className='space-y-2 text-sm pb-6 '>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Dimensions</h2>
        <h3 className='text-gray-20 text-xs'>Without mount: Ø86 x 112.6 mm (Ø3.4 x 4.4")
        With mount: Ø86 x 175.3 mm (Ø3.4 x 6.9")</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Weight</h2>
        <h3 className='text-gray-20 text-xs'>	Without mount: 675 g (1.5 lb)
        With mount: 820 g (1.8 lb)</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Enclosure material</h2>
        <h3 className='text-gray-20 text-xs'>Aluminum alloy, polycarbonate</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Mount material</h2>
        <h3 className='text-gray-20 text-xs'>Aluminum alloy</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Weatherproofing</h2>
        <h3 className='text-gray-20 text-xs'>IP65</h3>
      </div>
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold '>Optics</h1>
    <div className='space-y-2 text-sm pb-6'>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Sensor</h2>
        <h3 className='text-gray-20 text-xs'>1/1.8" 8MP
        </h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Lens</h2>
        <h3 className='text-gray-20 text-xs'>F 4.1–12.3 mm; ƒ/1.53–ƒ/3.3	</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>View angle</h2>
        <h3 className='text-gray-20 text-xs'>Wide: H: 109.9°, V: 59.9°, D: 127.7°
        Zoom: H: 34.9°, V: 19.7°, D: 40°</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2 '>
        <h2 className='font-medium'>Night mode</h2>
        <h3 className='text-gray-20 text-xs'>Built-in IR LED illumination and an IR cut filter</h3>
      </div>
      
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold '>Video</h1>
    <div className='space-y-2 text-sm pb-6'>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Resolution</h2>
        <h3 className='text-gray-20 text-xs'>8MP 3840 x 2160 (16:9)
        </h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Max. frame rate</h2>
        <h3 className='text-gray-20 text-xs'>30 FPS</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Image settings</h2>
        <h3 className='text-gray-20 text-xs'>Color, brightness, sharpness, contrast, white balance, exposure control, 2DNR, 3DNR, NR by motion, masking, text overlay, HDR</h3>
      </div>
      
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold '>System</h1>
    <div className='space-y-2 text-sm pb-6'>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Processor</h2>
        <h3 className='text-gray-20 text-xs'>Quad-core Arm® Cortex®-A53 based chip
        </h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Networking interface</h2>
        <h3 className='text-gray-20 text-xs'>	GbE RJ45 port</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Max. power consumption</h2>
        <h3 className='text-gray-20 text-xs'>Device: 11W
        Device with Enhancer: 22W</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2 '>
        <h2 className='font-medium'>Power method</h2>
        <h3 className='text-gray-20 text-xs'>Device: PoE
        Device with Enhancer: PoE+</h3>
      </div>
      
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold '>Audio</h1>
    <div className='space-y-2 text-sm pb-6'>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Microphone</h2>
        <h3 className='text-gray-20 text-xs'>Yes (Can be disabled)
        </h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Speaker</h2>
        <h3 className='text-gray-20 text-xs'>Yes</h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>2-way audio</h2>
        <h3 className='text-gray-20 text-xs'>	Far-field microphone array</h3>
      </div>
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-3 text-lg font-semibold '>Softwar</h1>
    <div className='space-y-2 text-sm pb-6'>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Web application</h2>
        <h3 className='text-gray-20 text-xs'>UniFi Protect
        </h3>
      </div>
      <div className='flex justify-between hover:bg-slate-50 py-2'>
        <h2 className='font-medium'>Mobile app</h2>
        <h3 className='text-gray-20 text-xs'>	UniFi Protect iOS™ and Android™</h3>
      </div>
      
    </div>

  </div>
</div>

      </TabsContent>

      <TabsContent value="deployment" className="flex justify-center items-center">
        <Image
         src="/deployment-cam.avif"
         alt='deplotment'
         width={900}
         height={900}

        />
      </TabsContent>

      <TabsContent value="in_the_box" className="flex justify-center items-center">
      <Image
         src="/in-the-box-cam.avif"
         alt='deplotment'
         width={900}
         height={900}

        />
      </TabsContent>

      <TabsContent value="build_features" className="flex justify-center items-center">
      <Image
         src="/build_features-cam.avif"
         alt='deplotment'
         width={700}
         height={700}

        />
      </TabsContent>

      

    </Tabs>
  )
}

export default TabsCamera