import Image from 'next/image';


// Define a type for the icon items
type IconItem = {
  label: string;
  icon: string;
  isActive?: boolean; // Optional for determining active state
};

// Define your icons here
const icons: IconItem[] = [
  { label: 'Motion Detection', icon:'/motion.svg'},
  { label: 'Person Detection', icon:'/person.svg' },
  { label: 'Vehicle Detection', icon:'/vehicle.svg' },
  { label: 'License Plate Recognition', icon:'/license-plate.svg' },
  { label: 'Smoke/CO Alarm Detection', icon:'/alarm.svg' },
  { label: 'Motion Zones', icon:'/zones.svg' },
  { label: 'Privacy Zones', icon: '/privacy.svg'},
  { label: 'Crossing Lines', icon:'/crossing-lines.svg' },
];

const FeaturesIcons = () => {
  return (
    <div className="flex justify-center py-10 pt-14  max-w-[1100px] mx-auto flex-wrap ">
      {icons.slice(0, 5).map((item, index) => (
        <div key={index} className=" flex flex-col justify-center px-1 text-center items-center w-32">
          <Image src={item.icon} key={index} alt={item.label} width={50} height={50} />
          <p
            className='text-gray-30 mt-2 flex flex-col w-32'
          >
            {item.label}
          </p>

        </div>
      ))}
       
       {icons.slice(5).map((item, index) => (
        <div key={index} className=" flex flex-col justify-center px-1 text-center items-center w-32 ">
          <Image src={item.icon} key={index} alt={item.label} width={50} height={50} />
          <p
            className='text-gray-30 mt-2 flex flex-col w-24'
          >
            {item.label}
          </p> 

        </div>

      ))}


    </div>
  );
};

export default FeaturesIcons;
