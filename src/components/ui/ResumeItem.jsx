import { useState } from 'react'
import { Typography } from "@material-tailwind/react"

function ResumeItem({ period, title, institution, description }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className="relative pl-10 before:absolute before:left-0 before:top-2 before:h-5 before:w-5 before:rounded-full before:bg-blue-500 before:content-[''] before:shadow-md before:shadow-blue-500/20 before:transition-all before:duration-300 after:absolute after:bottom-0 after:left-[9px] after:top-10 after:w-[2px] after:bg-gradient-to-b after:from-blue-500 after:to-blue-50 after:content-['']"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`transition-all duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
        <Typography
          variant="small"
          color={isHovered ? "blue" : "blue-gray"}
          className="mb-2 font-semibold uppercase tracking-wider"
        >
          {period}
        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-2 font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="mb-3 font-medium italic"
        >
          {institution}
        </Typography>
        <Typography className="font-normal !text-gray-600 leading-relaxed">
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default ResumeItem