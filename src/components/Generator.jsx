import { loading } from "../assets"

const Generator = ({className}) => {
  return (
    <div className={`flex items-center rounded-[1.7rem] bg-n-8/80 h-[3.5rem] px-6 ${className ||''} text-base`}>
          <img
              className="h-5 w-5 mr-4"
              src={loading}
              alt="loading"
          />
          AI is generating
    </div>
  )
}

export default Generator
