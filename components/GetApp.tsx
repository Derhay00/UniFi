import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">

            
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="flex items-center gap-2 px-10 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"//btn_white
              full
              link='https://apps.apple.com/us/app/unifi/id1057750338'
            />
            
           
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="flex items-center gap-2 px-10 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"//btn_dark_green_outline
              full 
              link='https://play.google.com/store/apps/details?id=com.ubnt.easyunifi&hl=fr'
            />
            
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones-unifi.svg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp