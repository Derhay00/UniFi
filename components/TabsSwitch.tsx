import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'

const TabsSwitch = () =>  {
    return (
      <Tabs defaultValue="product" className="py-1 w-full flex flex-col items-center">
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
  
        <TabsContent value="product" className="flex flex-col items-center w-full px-4 gap-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 ">
      <div className="flex justify-center">
        <Image 
          src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F51e22689-9b81-4717-beed-fe2c65c57362%2Ff94911ce-b83e-4fc6-a827-4f017a69e05c.png&q=75&w=1920" 
          alt="Product Image 1" 
          width={500} 
          height={500} 
          
          
        />
      </div>
      <div className="flex justify-center">
        <Image 
          src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F51e22689-9b81-4717-beed-fe2c65c57362%2Feba99181-50b1-463e-908b-6c4221f15232.png&q=75&w=1920" 
          alt="Product Image 3" 
          width={500} 
          height={500} 
          
        />
      </div>
      </div>
      <div className="flex justify-center ">
        <Image 
          src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F51e22689-9b81-4717-beed-fe2c65c57362%2Fbbc5bcd5-c092-4d12-9500-9cfab40c4e0a.png&q=75&w=1920" 
          alt="Product Image 2" 
          width={1017} 
          height={500} 
          
        />
      </div>
      
    
  </TabsContent>
  
        <TabsContent value="technical_specification" className="flex flex-col  px-4 lg:w-[1080px] md:w-[760px] sm:w-[640px] ">
        <div className=''>
    <Link href="https://dl.ui.com/qig/usw-pro-max-48-poe/#index" className='text-blue-500 text-sm'>
      Installation Guide
    </Link>
    <div className='mt-4 '>
      <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Mechanical</h1>
      <div className='space-y-4 text-sm '>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Dimensions</h2>
          <h3 className='text-gray-20 text-xs'>442.4 x 400 x 44 mm (17.4 x 15.7 x 1.7")</h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Weight</h2>
          <h3 className='text-gray-20 text-xs'>	Without mounting brackets: 6.2 kg (13.7 lb)
          With mounting brackets: 6.3 kg (13.9 lb)</h3>
        </div>
        <div className='flex justify-between pb-6'>
          <h2 className='font-medium'>Enclosure material</h2>
          <h3 className='text-gray-20 text-xs '>	SGCC steel</h3>
        </div>
      </div>
      <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Hardware</h1>
      <div className='space-y-4 text-sm '>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Management interface</h2>
          <h3 className='text-gray-20 text-xs'>	Ethernet In-Band
          </h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Management interface</h2>
          <h3 className='text-gray-20 text-xs'>Ethernet	</h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Networking interface</h2>
          <h3 className='text-gray-20 text-xs'>(32) GbE RJ45 ports
(16) 1/2.5 GbE RJ45 ports
(4) 10G SFP+ ports</h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>PoE interface</h2>
          <h3 className='text-gray-20 text-xs'>		(32) PoE/PoE+ (Pins 1, 2+; 3, 6-)
          (16) 60W PoE++ (Pair A 1, 2+; 3, 6-) (Pair B 4, 5+; 7, 8-)</h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Total non-blocking throughput</h2>
          <h3 className='text-gray-20 text-xs'>112Gbps</h3>
        </div>
        <div className='flex justify-between '>
          <h2 className='font-medium'>Switching capacity</h2>
          <h3 className='text-gray-20 text-xs'>224Gbps</h3>
        </div>

        <div className='flex justify-between '>
          <h2 className='font-medium'>Forwarding rate</h2>
          <h3 className='text-gray-20 text-xs'>166.656Mpps</h3>
        </div>
        <div className='flex justify-between '>
          <h2 className='font-medium'>Power method</h2>
          <h3 className='text-gray-20 text-xs'>	(1) Universal input, 100—240V AC, 50/60 Hz
          (1) USP-RPS DC input</h3>
        </div>
        <div className='flex justify-between '>
          <h2 className='font-medium'>Power supply</h2>
          <h3 className='text-gray-20 text-xs'>	AC/DC, internal, 820W</h3>
        </div>
        <div className='flex justify-between pb-6'>
          <h2 className='font-medium'>Supported voltage range</h2>
          <h3 className='text-gray-20 text-xs'>100—240V AC</h3>
        </div>
      </div>
      <h1 className='border-t border-gray-200 pt-5 pb-6 text-lg font-semibold mb-2'>Etherlighting™</h1>
      <div className='space-y-4 text-sm '>
        <div className='flex justify-between'>
          <h2 className='font-medium'>Ethernet</h2>
          <h3 className='text-gray-20 text-xs'>	Locating
Speed/link
Native VLAN/network
          </h3>
        </div>
        <div className='flex justify-between'>
          <h2 className='font-medium'>SFP+</h2>
          <h3 className='text-gray-20 text-xs'>	Locating
Speed/link
Native VLAN/network</h3>
        </div>
        
      </div>
  
    </div>
  </div>
  
        </TabsContent>
  
        <TabsContent value="deployment" className="flex justify-center items-center">
          <Image
           src="/deployment-sw.avif"
           alt='deplotment'
           width={900}
           height={900}
  
          />
        </TabsContent>
  
        <TabsContent value="in_the_box" className="flex justify-center items-center">
        <Image
           src="/in-the-box-sw.avif"
           alt='deplotment'
           width={900}
           height={900}
  
          />
        </TabsContent>
  
        <TabsContent value="build_features-sw" className="flex justify-center items-center">
        <Image
           src="/build_features-sw.avif"
           alt='deplotment'
           width={700}
           height={700}
  
          />
        </TabsContent>
  
        
  
      </Tabs>
    )
  }
export default TabsSwitch