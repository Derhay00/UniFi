import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SwitchProduct = () => {
  return (
    <div className="relative flex flex-col justify-center items-center sm:px-10 sm:py-10">
      
      {/* Breadcrumb section */}
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
              <BreadcrumbPage>Pro-Max-48-PoE</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main product section */}
      <div className="flex flex-col md:flex-row items-center overflow-hidden max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Image section */}
        <div className="p-4 md:p-6">
          <video autoPlay muted preload="none" loop width={450}>
            <source src="/switch-vd.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Product details section */}
        <div className="flex flex-col justify-between p-4 md:pb-8 md:p-6 md:w-1/2 border-[2px] rounded-md border-blue-400">
          <div className="flex flex-row mb-5 items-center">
            <Image 
              src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F58922518-88f6-4c75-89c1-f57ba3d8253a%2Fc4541c43-13ef-4d4b-a558-cf912456f893.png&q=75&w=256" 
              alt="Pro Max 48 PoE" 
              width={70} 
              height={0} 
              className="mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold ">Pro Max 48 PoE</h2>
              <p className="mb-2 text-xs text-gray-20">Pro-Max-48-PoE</p>
              <p className=" text-gray-50 ">$1,299.00</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-8 text-sm font-light">
            <p className="text-gray-600 mb-4">
              A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output.
            </p>
            <ul className="list-inside mb-6 text-gray-600">
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/led.svg" alt="WiFi 7" width={20} height={20} />
                Etherlighting™ ports that illuminate to indicate port location, speed/link, and native VLAN/network*
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/poe_plus_plus.svg" alt="Spectral analysis" width={20} height={20} />
                (16) 2.5 GbE ports including (8) PoE+ and (8) PoE++
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/poe_plus_plus.svg" alt="Spatial streams" width={20} height={20} />
                (32) GbE ports including (24) PoE+ and (8) PoE++
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/sfp.svg" alt="Coverage" width={20} height={20} />
                (4) 10G SFP+ ports
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/power_support.svg" alt="Devices" width={20} height={20} />
                DC power backup ready
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/poe.svg" alt="PoE+" width={20} height={20} />
                720W total PoE availability
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-card-switch/apps.svg" alt="Uplink" width={20} height={20} />
                Managed with UniFi Network 8.0.24 and later
              </li>
            </ul>
            <p className="text-xs font-extralight pb-2">
              <strong>Note:</strong> 6 GHz operation is supported in <Link href="https://help.ui.com/hc/en-us/articles/8691786444567-Regions-Supporting-6-GHz" className="border-b border-blue-400 text-blue-400">these countries</Link>.
              <br/>
              Multi-Link Operation (MLO) capability is coming soon and will be provided via software update.
            </p>
            <p className="text-xs font-thin pb-2">*Pair with UniFi Etherlighting Patch Cables for optimal brightness.</p>
          </div>
          
          <div className="flex justify-end mt-4">
            <Link href="https://store.ui.com/us/en/checkout">
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

export default SwitchProduct;
