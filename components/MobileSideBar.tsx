import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const MobileSidebar = () => {
  return (
    <div className="lg:hidden flex">
      <Sheet>
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent className="bg-white flex flex-col h-screen">
          <SheetHeader className="flex-1 text-left space-y-8">
            <SheetTitle className="flex items-center">
              <Image src="/store-black.svg" alt="store" height={24} width={24} className="mr-2" />
              Products
            </SheetTitle>
            <SheetTitle className="flex items-center">
              <Image src="/flagship-black.svg" alt="flagship" height={24} width={24} className="mr-2" />
              Flag Ship
            </SheetTitle>
            <SheetTitle className="flex items-center">
              <Image src="/switch-black.svg" alt="switch" height={24} width={24} className="mr-2" />
              Switch
            </SheetTitle>
            <SheetTitle className="flex items-center">
              <Image src="/camera-black.svg" alt="camera" height={24} width={24} className="mr-2" />
              Camera
            </SheetTitle>
            <SheetTitle className="flex items-center">
              <Image src="/store-black.svg" alt="home" height={24} width={24} className="mr-2" />
              Home
            </SheetTitle>
          </SheetHeader>

          {/* Footer Container */}
          <div className="flex flex-col justify-center items-center mt-auto p-4 text-center text-sm text-gray-500">
            <p>©All rights reserved.</p>
            <p>Created by Mounsif Derhay</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
