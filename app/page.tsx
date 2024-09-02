import Camp from "@/components/Camp";
import FaQAccessPoint from "@/components/FaQAccessPoint";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import MainDesign from "@/components/MainDesign";
import MainPageVideo from "@/components/MainPageVideo";
import MainWelcome from "@/components/MainWelcome";




export default function Home() {
  return (
   <>
   <Hero />
   <Camp />
   <MainWelcome />
   <Guide />
   <MainPageVideo />
   <Features />
   
   <MainDesign/>
   <GetApp />
   <FaQAccessPoint/>
   </>
  );
}
