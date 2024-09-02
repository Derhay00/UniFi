import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      
      {/* Video Background */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero-bg.png" // Replace with your video file path
        
      />

      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
        <h1 className="bold-52 lg:bold-88">Access Point <br/>With Hyper WIFI</h1>
        {/* xl:max-w-[520px] */}
        <p className=" mt-6 font-semibold text-blue-500   md:w-[600px]">
        Just as you seek the unspoiled beauty of nature in every journey, Ubiquiti Unifi is dedicated to being with you on your quest for seamless connectivity. Whether you're exploring new frontiers or managing multiple locations, Unifi’s powerful app puts the entire world of networking in your hands.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Our Store"
            icon='/store.svg' 
            variant="btn_blue"
            link='/products' 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_gray_text" 
            link='/'
          />
        </div>
      </div>

     
    </section>
  )
}

export default Hero
