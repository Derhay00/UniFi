import AccessPointDesigns from '@/components/AccessPointDesigns'
import AccessPointProduct from '@/components/AccessPointProduct'
import FaQAccessPoint from '@/components/FaQAccessPoint'
import TabsAccessPoint from '@/components/TabsAccessPoint'
import WelcomToUnifi from '@/components/WelcomToUnifi'
import React from 'react'

const page = () => {
  return (
    <>
    <AccessPointProduct />
    <TabsAccessPoint />
    <WelcomToUnifi />
    <AccessPointDesigns/>
    <FaQAccessPoint />
    </>
  )
}

export default page