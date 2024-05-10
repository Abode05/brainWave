import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PriceList from "./PriceList";
import Sections from "./Sections"
import { LeftLine, RightLine } from "./design/Pricing";
import {motion} from 'framer-motion'
const Pricing = () => {
  return (
    <Sections className="overflow-hidden" id="pricing">
          <div className="container relative z-2">
              <div
              
                  className="hidden mb-[6.5rem] relative justify-center lg:flex">
                  <motion.img
                      src={smallSphere}
                      width={255}
                     height={255}
                    alt="Sphere"
                      className="relative "
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ scale: 1,opacity: 1}}
                      
                      transition={{ duration: 0.9}}
                  />
                     <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                    src={stars}
                    className="w-full animate-pulse"
                    width={950}
                    height={400}
                    alt="Stars"
                    />
                  </div>

              </div>
               <Heading
                      tag="Get started with Brainwave"
                      title="Pay once, use forever"
              />
              <div className="relative">
                  <PriceList  />
                  <LeftLine />
                  <RightLine />
        </div>
        <div className="flex justify-center mt-10" >
          <a className="font-bold text-xs font-code uppercase border-b tracking-wider cursor-pointer "
          href="/Pricing"
          >
            SEE THE FULL DETAILS
          </a>
        </div>
              
      </div>
    </Sections>
  )
}

export default Pricing
