import { companyLogos } from "../constant"

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
          <h5 className="text-center text-n-1/50 mb-6 tagline">
              HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
          </h5>
          <ul className="flex ">
              {companyLogos.map((logo,index) => (
                  <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem]">
                      <img
                          src={logo}
                          width={134}
                          height={28}
                          alt={logo}
                      />
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default CompanyLogo
