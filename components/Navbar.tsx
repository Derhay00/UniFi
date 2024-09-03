import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import MobileSidebar from "./MobileSideBar"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 hidden lg:flex">
      <Link href="/">
        <Image src="/unifi-logo-2.svg" alt="logo" width={47} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-600">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Our Store"
          icon="/store.svg"
          variant="btn_blue"
          link="/products"
        />
      </div>


       
      {/* <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      /> */}
      <MobileSidebar />
      
    </nav>
  )
}

export default Navbar