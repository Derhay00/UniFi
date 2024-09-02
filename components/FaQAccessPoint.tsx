
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FaQAccessPoint = () => {
  return (
    <>
    <div className=" py-14 flex flex-col items-center">
      <h1 className="pb-7 font-semibold text-2xl lg:text-4xl">Frequently Asked Questions</h1>
   <Accordion type="single" collapsible className="xl:px-40 px-6 w-full text-gray-50">
    <AccordionItem value="item-1">
    <AccordionTrigger>Why should I get UniFi APs?</AccordionTrigger>
    <AccordionContent>
    <p className="pb-3">UniFi is a state-of-the-art solution allowing you to effortlessly manage 100+ APs in the same way you manage an individual AP. 
    They offer enterprise quality hardware performance in a variety of elegantly designed form factors for a wide range of applications in any professional environment.
    </p>
    Pair with a <a className="text-blue-600">UniFi Cloud Gateway</a> for a full-featured UniFi Network including enhanced network security and traffic analytics, 
    built-in VPN access, and powerfully intuitive Policy-Based Routing (PBR).
    </AccordionContent>
   </AccordionItem>

   <AccordionItem value="item-2">
    <AccordionTrigger>How do I set up and configure my AP?</AccordionTrigger>
    <AccordionContent>
     1. Make sure <a className="text-blue-600">UniFi is set</a> up and running.<br/>
     2. Turn on your UniFi AP and make sure it has connectivity to your UniFi Console*<br/>
     3. Open your UniFi Mobile App (iOS / Android) or navigate to your <a className="text-blue-600">UniFi Site Manager</a>.<br/>
     4. Click/tap to <a className="text-blue-600">adopt</a> when your device pops up.<br/>
      <p className="pt-3">*APs are powered on when connected to a <a className="text-blue-600">UniFi PoE Switch</a> or AC power supply using a PoE Adapter.<br/>
      **A <a className="text-blue-600">UniFi Cloud Gateway</a> is recommended for the most seamless setup experience.</p>

    </AccordionContent>
   </AccordionItem>


   <AccordionItem value="item-3">
    <AccordionTrigger>How do I power my APs?</AccordionTrigger>
    <AccordionContent>
    Most APs require Power-over-Ethernet (PoE) which can be provided with a <a className="text-blue-600">UniFi PoE Switch</a> or a UniFi PoE Adapter. Make sure to check the device’s store page when determining which <a className="text-blue-600">PoE Mode</a> is required.

    <p className="pt-3">Other APs, such as the U6 Extender, can be plugged directly into an AC outlet.</p>
    </AccordionContent>
   </AccordionItem>


   <AccordionItem value="item-4">
    <AccordionTrigger>Can I wirelessly mesh my APs together?</AccordionTrigger>
    <AccordionContent>
    Yes, all UniFi APs automatically form a mesh network, broadcasting the same WiFi so you can maintain connectivity while roaming between your access points.

    <p className="pt-3">Our APs also support wireless meshing to one another so you can eliminate dead zones without the need to run additional cabling. Simply plug your AP into a UniFi PoE Adapter connected to an AC power outlet within range of a nearby access point to enable setup.</p>

     <p className="pt-3">Note that meshing is not available for Standalone Access Points (without UniFi).</p>
    </AccordionContent>
   </AccordionItem>


   <AccordionItem value="item-5">
    <AccordionTrigger>Are there any fees or licensing requirements?</AccordionTrigger>
    <AccordionContent>
    Absolutely not. Our goal is to provide you a feature-rich environment without any hidden fees.
    </AccordionContent>
   </AccordionItem>


   </Accordion>

    </div>
     </>
  )
}

export default FaQAccessPoint