import Sections from "./Sections"
import Heading from './Heading'
import { check, service1, service2, service3 } from "../assets"
import { brainwaveServices, brainwaveServicesIcons, serviceImages, showmessages } from "../constant"
import Generator from "./Generator"
import { Gradient, PhotChatMessage, VideoBar, VideoChatMessage } from "./design/Services"
import { useState } from "react"
const Services = () => {
  const [activeIcon, setActiveIcon] = useState(2);
   const [selectedImage, setSelectedImage] = useState(service3);
   const [showmessage, setshowmessage] = useState("vedio generation");

   const handleIconClick = (index) => {
         setActiveIcon(index === activeIcon ? null : index);
     setSelectedImage(serviceImages[`icon${index + 1}`]);
     setshowmessage(showmessages[`m${index + 1}`]);

  };
  return (
    <Sections id="how-to-use">
          <div className="container">
              <Heading
                  title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
          
              />
              <div className="relative">
                  <div className="relative z-1 items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden
                  lg:p-20 xl:h-[46rem]
                  ">
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                          <img
                              src={service1}
                              width={800}
                              alt="smartest ai"
                              height={730}
                              className="w-full h-full object-cover md:object-right"
                          />
                      </div>
                        <div className="relative ml-auto z-1 max-w-[17rem]">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                          <p className="mb-[3rem] text-n-3 body-2 ">Brainwave unlocks the potential of AI-powered applications</p>
                          <ul className="body-2">
                              {brainwaveServices.map((item,index) => (
                                  <li key={index} className="flex  py-4 items-start border-t border-n-6">
                                      <img
                                          src={check}
                                          width={24}
                                          height={24}

                                      />
                                      <p>{item}</p>
                                      
                                </li>
                              ))}
                          </ul>                
                      </div>  
                      <Generator className="absolute right-4 left-4 bottom-4 border border-n-1/10 lg:left-1/2 
                        lg:bottom-8 lg:-translate-x-1/2"/>
               </div>
          
                <div className="relative grid gap-5 lg:grid-cols-2  ">
                  <div className="relative border  border-n-1/10   min-h-[39rem] rounded-3xl overflow-hidden ">
                    <div className="absolute inset-0">
                      <img
                        src={service2}                                      
                        width={630}
                        height={750}
                        alt="robot"
                        className="w-full h-full object-cover" />
                      
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90 ">
                          <h4 className="h4 mb-4">Photo editing</h4>
                          <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
                 </div>
              <div className="">
              <PhotChatMessage />
              </div>           
              

            </div>
            <div className="p-4  rounded-3xl overflow-hidden bg-n-7 lg:min-h-[46rem] ">
              <div className="py-12 px-4 xl:px-12" >
                <h4 className="h4 mb-4">
                  Video generation 
                </h4>
                <p className="body-2 text-n-3 mb-[2rem]">The world’s most powerful AI photo and video art generation engine. What will you create?</p>
              
              <ul className="flex items-center justify-between">
                {brainwaveServicesIcons.map((item,index) => (
                  <li key={index}
                    className={`rounded-2xl flex items-center justify-center cursor-pointer 
                  ${
                      index ===activeIcon
                      ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] "
                      :"flex w-10 h-10  bg-n-6 md:w-15 md:h-15"
                  }`} onClick={() => handleIconClick(index)}
                  >
                    <div className={`
                    ${
                      index === activeIcon
                      ? "bg-n-7 flex items-center w-full h-full justify-center rounded-[1rem] "
                      :""
                    }
                    ` }>
                      <img
                        src={item} 
                         width={24} height={24} alt={item}
                        />
                      </div>

                  </li>
                )) }
              </ul>  
            </div>
            <div className="relative  h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src={selectedImage}
                   width={520}
                  height={400}
                  alt="Scary robot"
                  className="w-full"
                />
                  <VideoChatMessage text={showmessage} />
                <VideoBar />
            </div>
           </div>
                </div>
                

            <Gradient  />
               </div>
             </div>
    </Sections>
  )
}

export default Services
