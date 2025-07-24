import { Card, CardBody, Typography } from "@material-tailwind/react"

function SkillCard({ icon: Icon, title, description, technologies }) {
  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardBody>
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h5" className="mb-2">{title}</Typography>
        <Typography className="mb-4 text-gray-600">{description}</Typography>
        <div className="flex flex-wrap gap-3 mt-4">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default SkillCard
