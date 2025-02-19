import { check, grid, loading } from "../assets"
import { roadmap } from "../constant"
import Button from "./Button"
import Heading from "./Heading"
import Sections from "./Sections"
import Tagline from "./Tagline"

const Roadmap = () => {
  return (
      <Sections className="overflow-hidden" id="roadmap">
          <div className="container md:pb-10">
          <Heading
              tag="READY TO GET STARTED"
              title="What we’re working on"
          />
             <div className=" relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"  >
                  {roadmap.map((item) => {
                      const status = item.status === "done" ? "done" : "in progress";
                      return (
                          <div key={item.id}
                              className={`md:flex even:md:translate-y-7 p-0.25 rounded-[2.5rem] ${
                              item.colorful?"bg-conic-gradient":"bg-n-6"
                          } `}
                          >
                              <div className="relative overflow-hidden p-8 bg-n-8 rounded-[2.4375rem]  xl:p-15">
                                  <div className="absolute  top-0 left-0 max-w-full">
                                  <img
                                      src={grid}
                                      width={550}
                                      height={550}
                                          alt="grid"
                                          className="w-full"
                                  />
                                  </div>
                                  <div className="relative z-1">
                                      <div className="flex justify-between items-center max-w[27rem]  mb-8 md:mb-20 ">
                                          <Tagline>{item.date}</Tagline>
                                          <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                              <img
                                                  src={item.status === "done" ? check : loading}
                                                      width={16}
                                                      height={16}
                                                  alt={status}      
                                                  className="mr-2.5"
                                              />
                                                <div className="tagline">{status}</div> 
                                          </div>
                                      </div>
                                      <div className="mb-10 -my-10 -mx-15">
                                          <img
                                              src={item.imageUrl}
                                               width={628}
                                                height={426}
                                                alt={item.title}          
                                        
                                          />
                                      </div>
                                      <h4 className="h4 mb-4">{item.title}</h4>
                                      <p className="body-2 text-n-4">{item.text  }</p>
                                  </div>
                            </div>

                              
                          </div>
                      )
                  })}
                     
                 
              </div>
                 <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
        </div>
    </Sections>
  )
}

export default Roadmap
