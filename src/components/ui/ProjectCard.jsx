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
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-500 ease-in-out
        ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-md'} hover:border-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with hover overlay */}
      <CardHeader
        floated={false}
        className="relative h-60 cursor-pointer overflow-hidden rounded-none"
        onClick={onViewDetails}
      >
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 transition-opacity duration-500 ease-in-out
          hover:opacity-100 opacity-0">
          <Button
            color="white"
            size="sm"
            variant="text"
            className={`flex items-center gap-2 transition-all duration-500 ease-in-out ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Lihat Detail
            <ArrowTopRightOnSquareIcon className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <Chip
            value={category}
            size="sm"
            variant="filled"
            color="blue"
            className="text-xs font-medium rounded-full px-3 py-1.5 shadow-md"
          />
        </div>
      </CardHeader>

      {/* Body */}
      <CardBody className="p-6">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-bold cursor-pointer hover:text-blue-500 transition-colors"
          onClick={onViewDetails}
        >
          {title}
        </Typography>
        <Typography className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </Typography>

        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              value={tech}
              size="sm"
              variant="outlined"
              color="gray"
              className="text-xs font-medium"
            />
          ))}
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="pt-4">
        <Button
          fullWidth
          color="blue"
          className="flex items-center justify-center gap-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/20"
          onClick={onViewDetails}
        >
          Lihat Detail
          <ArrowTopRightOnSquareIcon strokeWidth={2} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
