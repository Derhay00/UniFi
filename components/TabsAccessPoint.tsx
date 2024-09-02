import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'

const TabsAccessPoint = () => {
  return (
    <Tabs defaultValue="product" className="pt-14 w-full flex flex-col items-center">
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Fa7afc5ea-5d9f-49fb-a3b1-2c56eedaed14.png&q=75&w=1920" 
        alt="Product Image 1" 
        width={500} 
        height={500} 
        
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Fdd9b9247-1806-45e9-987c-c6b6ede5d30d.png&q=75&w=1920" 
        alt="Product Image 3" 
        width={500} 
        height={500} 
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2F77d5ee76-6368-424e-9e6c-e8da2ab4cec5.png&q=75&w=1920" 
        alt="Product Image 2" 
        width={500} 
        height={500} 
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Ffb43ed4f-28e8-4f50-8585-6d94adbee99b.png&q=75&w=1920" 
        alt="Product Image 4" 
        width={500} 
        height={500} 
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Fc956450b-8576-476f-b264-e19d0824df58.png&q=75&w=1920" 
        alt="Product Image 5" 
        width={500} 
        height={500} 
        
      />
    </div>
    <div className="flex justify-center">
      <Image 
        src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2F6e7a979a-035c-4822-946d-62009cbcb240.png&q=75&w=1920" 
        alt="Product Image 6" 
        width={500} 
        height={500} 
        
      />
    </div>
  </div>
</TabsContent>

      <TabsContent value="technical_specification" className="flex flex-col  px-4 lg:w-[1080px] md:w-[760px] sm:w-[640px] ">
      <div className=''>
  <Link href="https://dl.ui.com/qig/u7-pro-max/#index" className='text-blue-500 text-sm'>
    Installation Guide
  </Link>
  <div className='mt-4 '>
    <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Mechanical</h1>
    <div className='space-y-4 text-sm '>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Dimensions</h2>
        <h3 className='text-gray-20 text-xs'>Ø206 x 46 mm (Ø8.1 x 1.8")</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Weight</h2>
        <h3 className='text-gray-20 text-xs'>680 g (1.5 lb)</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Enclosure material</h2>
        <h3 className='text-gray-20 text-xs'>Polycarbonate, aluminum</h3>
      </div>
      <div className='flex justify-between pb-6'>
        <h2 className='font-medium'>Mount material</h2>
        <h3 className='text-gray-20 text-xs'>Stainless steel (SUS304), galvanized steel (SGCC)</h3>
      </div>
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Hardware</h1>
    <div className='space-y-4 text-sm '>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Networking interface</h2>
        <h3 className='text-gray-20 text-xs'>(1) 1/2.5 GbE RJ45 port
        </h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Management interface</h2>
        <h3 className='text-gray-20 text-xs'>Ethernet	</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Power method</h2>
        <h3 className='text-gray-20 text-xs'>PoE+</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Max. power consumption</h2>
        <h3 className='text-gray-20 text-xs'>	25W</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Power supply</h2>
        <h3 className='text-gray-20 text-xs'>UniFi PoE switch</h3>
      </div>
      <div className='flex justify-between pb-6'>
        <h2 className='font-medium'>Supported voltage range</h2>
        <h3 className='text-gray-20 text-xs'>44—57V DC</h3>
      </div>
    </div>

    <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Software</h1>
    <div className='space-y-4 text-sm '>
      <div className='flex justify-between'>
        <h2 className='font-medium'>WiFi standards</h2>
        <h3 className='text-gray-20 text-xs'>802.11a/b/g/n/ac/ax/be (WiFi 6/6E, WiFi 7)
        </h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>Wireless security</h2>
        <h3 className='text-gray-20 text-xs'>	WPA-PSK, WPA-Enterprise (WPA/WPA2/WPA3/PPSK)</h3>
      </div>
      <div className='flex justify-between'>
        <h2 className='font-medium'>BSSID</h2>
        <h3 className='text-gray-20 text-xs'>8 per radio</h3>
      </div>
      <div className='flex justify-between '>
        <h2 className='font-medium '>VLAN</h2>
        <h3 className='text-gray-20 text-xs'>802.1Q</h3>
      </div>
      <div className='flex justify-between '>
        <h2 className='font-medium '>Advanced QoS</h2>
        <h3 className='text-gray-20 text-xs'>	Per-user rate limiting</h3>
      </div>
      <div className='flex justify-between '>
        <h2 className='font-medium '>Guest traffic isolation</h2>
        <h3 className='text-gray-20 text-xs'>Supported</h3>
      </div>
    </div>

  </div>
</div>

      </TabsContent>

      <TabsContent value="deployment" className="flex justify-center items-center">
        <Image
         src="/deployment.avif"
         alt='deplotment'
         width={900}
         height={900}

        />
      </TabsContent>

      <TabsContent value="in_the_box" className="flex justify-center items-center">
      <Image
         src="/in-the-box.avif"
         alt='deplotment'
         width={900}
         height={900}

        />
      </TabsContent>

      <TabsContent value="build_features" className="flex justify-center items-center">
      <Image
         src="/build_features.avif"
         alt='deplotment'
         width={700}
         height={700}

        />
      </TabsContent>

      

    </Tabs>
  )
}

export default TabsAccessPoint
