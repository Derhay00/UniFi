import CameraDesign from '@/components/CameraDesign'
import CameraProduct from '@/components/CameraProduct'
import FaQCamera from '@/components/FaQCamera'
import FeaturesIcons from '@/components/FeaturesIcons'
import TabsCamera from '@/components/TabsCamera'
import WelconToAiCamera from '@/components/WelconToAiCamera'

import React from 'react'

const page = () => {
  return (<>
  <CameraProduct />
    <TabsCamera />
    <WelconToAiCamera/>
    <FeaturesIcons />
    <CameraDesign/>

    <div className="text-center  px-6">
      <h2 className="text-4xl font-semibold mb-1">Get It Now</h2>
      <p className="text-sm text-blue-600 hover:underline cursor-pointer font-semibold ">Our Store</p>
      </div>
    <CameraProduct />
    <FaQCamera />
    
  </>
    
  )
}

export default page