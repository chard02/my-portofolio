import { Typography } from "@material-tailwind/react"
import SkillCard from "../components/ui/SkillCard"

// Import icons
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CommandLineIcon,
  CpuChipIcon,
  EyeIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid"

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Frontend Web Development",
    description:
      "Mengembangkan antarmuka web yang menarik dan fungsional menggunakan HTML5, CSS3, JavaScript, React, dan teknologi frontend modern lainnya.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Pengembangan Aplikasi Mobile",
    description:
      "Membangun aplikasi mobile responsif dan intuitif yang berfungsi dengan baik di perangkat iOS & Android, dari konsep hingga deployment.",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    icon: CommandLineIcon,
    title: "Tech Stack Modern",
    description:
      "Menguasai berbagai teknologi frontend populer, termasuk framework JavaScript modern, sistem manajemen state, dan alat build.",
    technologies: ["Next.js", "Redux", "TypeScript", "Vite", "Webpack"]
  },
  {
    icon: CpuChipIcon,
    title: "Optimasi Web",
    description:
      "Mengoptimalkan kinerja website dan aplikasi untuk kecepatan, memastikan pengalaman pengguna yang cepat dan responsif yang meningkatkan peringkat SEO.",
    technologies: ["Lazy Loading", "Code Splitting", "Performance Optimization"]
  },
  {
    icon: EyeIcon,
    title: "Desain Berfokus Pengguna",
    description:
      "Mengembangkan antarmuka pengguna yang tidak hanya fungsional tetapi juga estetis, memberikan pengalaman pengguna yang intuitif dan menyenangkan.",
    technologies: ["UI/UX", "Figma", "Adobe XD", "Responsive Design"]
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Testing & Jaminan Kualitas",
    description:
      "Melakukan pengujian dan debugging aplikasi secara menyeluruh untuk menjamin lingkungan yang bebas bug dan aman bagi pengguna.",
    technologies: ["Jest", "React Testing Library", "Cypress", "E2E Testing"]
  },
]

function Skills() {
  return (
    <section id="skills" className="px-8 py-24 bg-gray-50 relative overflow-hidden">
      {/* Background pattern decorations */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto mb-20 text-center animate-on-scroll relative z-10">
        <div className="inline-block mb-3">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold">
            Keahlian Saya
          </span>
        </div>
        <Typography variant="h2" color="blue-gray" className="mb-5 text-3xl lg:text-4xl font-bold">
          Layanan Yang Saya Tawarkan
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-600 lg:w-3/4 xl:w-1/2 leading-relaxed"
        >
          Saya tidak hanya seorang pengembang, tapi juga seorang pencipta pengalaman digital.
          Menciptakan pengalaman online yang imersif bukan hanya pekerjaan tetapi panggilan saya.
          Temukan di bawah ini bagaimana saya dapat membantu Anda.
        </Typography>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, idx) => (
          <div key={idx} className="animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
            <SkillCard 
              icon={skill.icon} 
              title={skill.title} 
              description={skill.description}
              technologies={skill.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills