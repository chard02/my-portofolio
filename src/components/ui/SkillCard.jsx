import { useState } from 'react'
import { Card, CardBody, Typography, Chip } from "@material-tailwind/react"

function SkillCard({ icon: Icon, title, description, technologies }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Card 
      color="transparent" 
      shadow={false}
      className={`relative overflow-hidden rounded-xl border border-gray-200 p-6 transition-all duration-500 ${
        isHovered ? 'shadow-xl transform -translate-y-2 border-transparent' : 'bg-white/80'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern for hover state */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : ''
      }`}></div>
      
      <CardBody className="p-0 relative z-10">
        <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-500 ${
          isHovered ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-blue-50 text-blue-500'
        }`}>
          <Icon className="h-7 w-7" />
        </div>
        
        <Typography variant="h5" color="blue-gray" className="mb-3 font-semibold">
          {title}
        </Typography>
        
        <Typography className="mb-8 font-normal !text-gray-600 leading-relaxed">
          {description}
        </Typography>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              value={tech}
              size="sm"
              variant={isHovered ? "filled" : "outlined"}
              color={isHovered ? "blue" : "gray"}
              className={`text-xs font-medium transition-all duration-300 ${
                isHovered ? 'shadow-sm' : ''
              }`}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default SkillCard