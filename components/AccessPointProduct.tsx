import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AccessPointProduct = () => {
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
              <BreadcrumbPage>Access-Pointe-U7-Pro-Max</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main product section */}
      <div className="flex flex-col md:flex-row items-center overflow-hidden max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Image section */}
        <div className="p-4 md:p-6">
          <video autoPlay muted preload="none" loop width={450}>
            <source src="/flagship-vd.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Product details section */}
        <div className="flex flex-col justify-between p-4 md:pb-8 md:p-6 md:w-1/2 border-[2px] rounded-md border-blue-400">
          <div className="flex flex-row mb-5 items-center">
            <Image 
              src="https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Fbad94693-bc54-4ab4-b060-9b972401941c.png&q=75&w=256" 
              alt="U7 Pro Max" 
              width={70} 
              height={0} 
              className="mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold ">U7 Pro Max</h2>
              <p className="mb-2 text-xs text-gray-20">U7-Pro-Max</p>
              <p className=" text-gray-50 ">$279.00</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-8 text-sm font-light">
            <p className="text-gray-600 mb-4">
              Ceiling-mounted WiFi 7 AP with 8 spatial streams, 6 GHz support,
              and a dedicated spectral scanning engine for interference-free WiFi in demanding, 
              large-scale environments.
            </p>
            <ul className="list-inside mb-6 text-gray-600">
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/wifi7.svg" alt="WiFi 7" width={20} height={20} />
                WiFi 7 with 6 GHz support
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/radio.svg" alt="Spectral analysis" width={20} height={20} />
                Real-time spectral analysis for enhanced channel selection*
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/streams.svg" alt="Spatial streams" width={20} height={20} />
                8 spatial streams
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/floorplan.svg" alt="Coverage" width={20} height={20} />
                160 m² (1,750 ft²) coverage
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/connection.svg" alt="Devices" width={20} height={20} />
                500+ connected devices
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/poe_plus.svg" alt="PoE+" width={20} height={20} />
                Powered using PoE+
              </li>
              <li className="pb-[10px] flex">
                <Image className="mr-2" src="/icons-cards-flagship/uplink.svg" alt="Uplink" width={20} height={20} />
                2.5 GbE uplink
              </li>
            </ul>
            <p className="text-xs font-extralight pb-2">
              <strong>Note:</strong> 6 GHz operation is supported in <Link href="https://help.ui.com/hc/en-us/articles/8691786444567-Regions-Supporting-6-GHz" className="border-b border-blue-400 text-blue-400">these countries</Link>.
              <br/>
              Multi-Link Operation (MLO) capability is coming soon and will be provided via software update.
            </p>
            <p className="text-xs font-thin pb-2">*Requires UniFi Network 8.2.93 and later.</p>
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

export default AccessPointProduct;
