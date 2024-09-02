import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaQCamera = () => {
  return (
    <>
      <div className="py-14 flex flex-col items-center">
        <h1 className="pb-7 font-semibold text-2xl lg:text-4xl">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="xl:px-40 px-6 w-full text-gray-50">
          

          {/* Additional items for the UniFi Console running Protect */}
          <AccordionItem value="item-6">
            <AccordionTrigger>What do I need to get started?</AccordionTrigger>
            <AccordionContent>
              You will need a UniFi Console running Protect, such as:
              <ul className="list-disc ml-5">
                <li>UniFi Cloud Gateways: Capable of managing up to 20 HD cameras or 7 4K cameras.</li>
                <li>UniFi Network Video Recorders: Ideal for enterprise environments, managing up to 60 HD cameras or 20 4K cameras.</li>
                <li>UniFi CloudKey+: Great for small-to-medium deployments, managing up to 20 HD cameras or 7 4K cameras.</li>
              </ul>
              Additionally, you will need a UniFi Protect Camera and compatible external storage for recording.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How many cameras can I manage?</AccordionTrigger>
            <AccordionContent>
              The number of cameras you can manage depends on the UniFi Console you are using. For example, a Network Video Recorder Pro can support up to 60 HD cameras or 20 4K cameras. You can use the UniFi Resource Calculator to see specific limitations for each console.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Are there any fees for using UniFi Protect?</AccordionTrigger>
            <AccordionContent>
              Absolutely not. Our goal is to provide you with a feature-rich security solution without any hidden or recurring fees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>How do I access my cameras?</AccordionTrigger>
            <AccordionContent>
              You can access your cameras from anywhere in the world using the UniFi Site Manager or the UniFi Protect Mobile App (iOS/Android). All footage remains local to your UniFi Console for maximum data privacy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Are my video recordings private and secure?</AccordionTrigger>
            <AccordionContent>
              Yes, we prioritize privacy standards. Your recordings are saved locally on your UniFi Console, without any cloud involvement.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </>
  )
}

export default FaQCamera
