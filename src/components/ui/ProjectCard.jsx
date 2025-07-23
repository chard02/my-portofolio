import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

function ProjectCard({ img, title, description, technologies, link, category, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-500 ${
        isHovered ? 'shadow-xl transform -translate-y-2' : 'shadow-md'
      } rounded-xl border border-gray-100 hover:border-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader 
        floated={false} 
        className="relative h-60 m-0 overflow-hidden cursor-pointer"
        onClick={onViewDetails}
      >
        <div className={`absolute inset-0 bg-black/40 z-10 flex items-center justify-center transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button 
            color="white" 
            size="sm" 
            variant="text" 
            className={`flex items-center gap-2 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Lihat Detail
            <ArrowTopRightOnSquareIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute top-4 right-4 z-20">
          <Chip
            value={category}
            size="sm"
            variant={isHovered ? "filled" : "gradient"}
            color="blue"
            className={`text-xs font-medium rounded-full px-3 py-1.5 shadow-md transition-all duration-300 ${
              isHovered ? 'shadow-blue-500/20' : ''
            }`}
          />
        </div>
      </CardHeader>
      <CardBody className="p-6">
        <Typography 
          variant="h5" 
          color="blue-gray" 
          className="mb-3 font-semibold cursor-pointer hover:text-blue-500 transition-colors"
          onClick={onViewDetails}
        >
          {title}
        </Typography>
        <Typography className="font-normal text-gray-600 mb-6 line-clamp-3">
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
              className={`text-xs font-normal transition-all duration-300 ${
                isHovered ? 'shadow-sm' : ''
              }`}
            />
          ))}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          fullWidth
          color={isHovered ? "blue" : "blue-gray"}
          className={`flex items-center justify-center gap-2 rounded-lg shadow-md transition-all duration-500 ${
            isHovered ? 'shadow-lg shadow-blue-500/20' : ''
          }`}
          onClick={onViewDetails}
        >
          Lihat Detail
          <ArrowTopRightOnSquareIcon strokeWidth={2} className={`h-4 w-4 transition-transform duration-300 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard