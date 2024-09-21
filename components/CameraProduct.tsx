"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CameraProduct = () => {
  const [videoSrc, setVideoSrc] = useState("/camera-vd-black.mp4"); // Default video source
  const [imgSrc, setImageSrc] = useState("https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F8889e279-c8b3-4d97-89fb-9559d498c6bd.png&q=75&w=64");

  return (
    <div className="relative flex flex-col justify-center items-center sm:px-10 sm:py-10">

        <div className="absolute left-8 top-4 sm:left-32 sm:top-7">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:underline" href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="hover:underline" href="/products">Store</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Camera-AI-Pro-4K</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
         </div>



      <div className="flex flex-col md:flex-row items-center overflow-hidden max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Video section */}
        <div className="p-4 md:p-6">
          <video key={videoSrc} autoPlay muted preload="none" loop width={450}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Product details section */}
        <div className="flex flex-col justify-between p-4 md:pb-8 md:p-6 md:w-1/2 border-[2px] rounded-md border-blue-400">
          <div className="flex flex-row mb-5 items-center">
            <Image 
              src={imgSrc}
              key={imgSrc}
              alt="U7 Pro Max" 
              width={70} 
              height={70} 
              className="mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">AI Pro</h2>
              <p className="mb-2 text-xs text-gray-20">AI-Pro-4K</p>
              <p className="text-gray-50">$499.00</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 pb-8 text-sm font-light">
            <p className="text-gray-600 mb-4">
              Indoor/outdoor 4K PoE camera with 3x optical zoom, long-range IR night vision, and enhanced AI detection capabilities.
            </p>
            <ul className="list-inside mb-6 text-gray-600">
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/lens.svg" alt="4K Video Resolution" width={20} height={20} />
                4K (8MP) video resolution
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/zoom.svg" alt="3x Optical Zoom" width={20} height={20} />
                3x optical zoom
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/range.svg" alt="Advanced AI Detection" width={20} height={20} />
                Advanced AI: Detect people, read license plates, and more
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/night.svg" alt="IR Night Vision" width={20} height={20} />
                25 m (82 ft) IR night vision
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/microphone.svg" alt="Far-field Microphone" width={20} height={20} />
                Far-field microphone array for two-way audio
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/poe.svg" alt="PoE Connectivity" width={20} height={20} />
                Connect and power using PoE
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-camera/waterdrop.svg" alt="Weatherproof Design" width={20} height={20} />
                Weatherproof (outdoor exposed)
              </li>
            </ul>

            {/* Color selection buttons */}
            {/* Color selection buttons */}
<div className="flex flex-wrap justify-start gap-4   sm:space-y-0 md:space-y-0 lg:space-y-0">
  <button 
    onClick={() => {
      setVideoSrc("/camera-vd-black.mp4");
      setImageSrc("https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F8889e279-c8b3-4d97-89fb-9559d498c6bd.png&q=75&w=64");
    }}
    className="bg-black hover:bg-gray-800 text-white py-2 px-20 sm:px-20 md:px-20 lg:px-20 rounded-md transition duration-200 ease-in-out w-full sm:w-48 md:w-48 lg:w-48"
  >
    Black
  </button>
  <button
    onClick={() => {
      setVideoSrc("/camera-vd-white.mp4");
      setImageSrc("https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2Ffab126b6-f5fa-43e5-b48c-c156096a1ae0.png&q=75&w=64");
    }}
    className=" bg-white border border-gray-300 hover:bg-gray-100 text-blue-600 py-2 px-20 sm:px-20 md:px-20 lg:px-20 rounded-md transition duration-200 ease-in-out w-full sm:w-48 md:w-48 lg:w-48"
  >
    White
  </button>
</div>
          </div>

          <div className="flex justify-end mt-4">
            <Link href="/products/camera/checkout-cam">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-200 ease-in-out">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraProduct;
