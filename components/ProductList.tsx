// components/ProductList.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


interface Product {
  image: string,
  name: string;
  semititle: string;
  description: string;
  price: string;
  link: string;
}

const products: Product[] = [
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F350070a0-ae43-431b-b052-8e849c3b0a75%2Fbad94693-bc54-4ab4-b060-9b972401941c.png&q=75&w=256',
    name: 'U7 Pro Max',
    semititle: 'U7-Pro-Max',
    description: 'Ceiling-mounted WiFi 7 AP with 8 spatial streams, 6 GHz support, and a dedicated spectral scanning engine for interference...',
    price: '$279.00',
    link: 'products/access-point',
  },
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F51e22689-9b81-4717-beed-fe2c65c57362%2F836c5725-38ba-4c75-a886-a7eea87db215.png&q=75&w=256',
    name: 'Pro Max 48 PoE',
    semititle: 'USW-Pro-Max-48-PoE(720W)',
    description: 'A 48-port, Layer 3 Etherlighting™ switch with 2.5 GbE and PoE++ output...',
    price: '$1,299.00',
    link: 'products/switching',
  },
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F3b2997e9-38a5-499b-9b01-28acaf9bf6b7%2F3b579101-bfac-4a57-987b-f06d5fb9a3fd.png&q=75&w=256',
    name: 'AI Pro',
    semititle: 'UVC-AI-Pro',
    description: 'Indoor/outdoor 4K PoE camera with 3x optical zoom, long-range IR night vision, and enhanced AI detection capabilities...',
    price: '$499.00',
    link: 'products/camera',
  },
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fcdn.ecomm.ui.com%2Fproducts%2F8e00b35d-0ca9-45c9-93f7-9b24e465744f%2F60451956-02b5-4cf1-b041-d6eb8feaddad.png&q=75&w=256',
    name: 'G2 Starter Kit Pro',
    semititle: 'UA-G2-SK-Pro',
    description: 'Hit the ground running with Access, featuring a professional experience for a door with two readers.',
    price: '$599.00',
    link: '',
  },
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fassets.ecomm.ui.com%2F_next%2Fstatic%2Fmedia%2Futp.e410d338.png&q=75&w=256',
    name: 'Phone Touch Max',
    semititle: 'UTP-TouchMax-L',
    description: 'Premium desktop smartphone that delivers the ultimate user experience.',
    price: '$129.00',
    link: '',
  },
  {
    image: 'https://images.svc.ui.com/?u=https%3A%2F%2Fassets.ecomm.ui.com%2F_next%2Fstatic%2Fmedia%2Fev-charging.4ffd8abf.png&q=75&w=256',
    name: 'EV Station Pro',
    semititle: 'UC-EV-Station-Pro',
    description: 'Weatherproof, 11 kW Level 2 electric vehicle charging station with an ultra-bright 10.1" touch display, flexible access control...',
    price: '$1,199.00',
    link: '',
  },
];

const ProductList: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {/* Wrap the Breadcrumb in a full-width div */}
        <div className="md:pl-10 md:w-full">
          <Breadcrumb className="">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className='hover:underline' href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Store</BreadcrumbPage>
              </BreadcrumbItem>

            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {products.slice(0, 3).map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="bg-[#fafbfb] border border-[#fafbfb] rounded-md hover:drop-shadow-2xl duration-300 p-6 flex flex-col justify-between md:w-80 lg:w-72 h-[450px]">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
                <h2 className="text-sm mb-3 font-light text-gray-600">{product.semititle}</h2>
                <p className="text-sm font-light text-gray-700 mb-6">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-lg font text-gray-500">{product.price}</h3>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}

        {products.slice(3, 4).map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="bg-[#fafbfb] border border-[#fafbfb] rounded-md hover:drop-shadow-2xl duration-300 p-6 flex flex-col justify-between md:w-80 lg:w-72 h-[450px] opacity-50 cursor-auto">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
                <h2 className="text-sm mb-3 font-light text-gray-600">{product.semititle}</h2>
                <p className="text-sm font-light text-gray-700 mb-6">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-lg font text-gray-500">{product.price}</h3>
                <button className="bg-blue-300 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  Sold Out
                </button>
              </div>
            </div>
          </Link>
        ))}


{products.slice(4).map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="bg-[#fafbfb] border border-[#fafbfb] rounded-md hover:drop-shadow-2xl duration-300 p-6 flex flex-col justify-between md:w-80 lg:w-72 h-[450px] opacity-50 cursor-auto">
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                />
              </div>
              <div className="text-left">
                <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
                <h2 className="text-sm mb-3 font-light text-gray-600">{product.semititle}</h2>
                <p className="text-sm font-light text-gray-700 mb-6">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <h3 className="text-lg font text-gray-500">{product.price}</h3>
                <button className="bg-blue-300 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  Coming Soon
                </button>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </>
  );
};

export default ProductList;

