import FaQAccessPoint from '@/components/FaQAccessPoint'
import FeaturesIconsSwitch from '@/components/FeaturesIconsSwitch'
import SwitchDesign from '@/components/SwitchDesign'
import SwitchProduct from '@/components/SwitchProduct'
import TabsSwitch from '@/components/TabsSwitch'
import WelcomToSwitching from '@/components/WelcomToSwitching '
import React from 'react'

const page = () => {
  return (
    <>
    <SwitchProduct />
    <TabsSwitch />
    <WelcomToSwitching />
    <FeaturesIconsSwitch />
    <SwitchDesign />

    <FaQAccessPoint />
    </>
  )
}

export default page