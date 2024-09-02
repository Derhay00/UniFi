import Image from 'next/image';
import React from 'react';


type IconItem = {
  label: string;
  icon: string;
  isActive?: boolean; // Optional for determining active state
};

// Define your icons here
const icons: IconItem[] = [
  { label: 'Topology', icon:'/topology.svg'},
  { label: 'VLAN Management', icon:'/vlan.svg' },
  { label: 'Port Manager', icon:'/ports.svg' },
  { label: 'Network Viewer', icon:'/defined-network.svg' },
  
];

const FeaturesIconsSwitch = () => {
  return (
    <div className="flex justify-center py-10 pt-14  max-w-[1100px] mx-auto flex-wrap ">
      {icons.map((item, index) => (
        <div key={index} className=" flex flex-col justify-center px-1 text-center items-center w-32">
          <Image src={item.icon} key={index} alt={item.label} width={50} height={50} />
          <p
            className='text-gray-30 mt-2 flex flex-col w-32'
          >
            {item.label}
          </p>

        </div>
      ))}
       
    


    </div>
  )
}

export default FeaturesIconsSwitch