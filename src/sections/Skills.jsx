import { Typography } from "@material-tailwind/react"
import SkillCard from "../components/ui/SkillCard"

// Section Icons
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  EyeIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid"

// Tech Icons (React Icons)
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiC,
  SiCplusplus,
  SiDart,
  SiLaravel,
  SiReact,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFlutter,
  SiJest,
  SiPostgresql,
  SiSqlite,
  SiRedis
} from "react-icons/si"
import { BiNetworkChart } from "react-icons/bi"

const SKILLS = [
  {
    icon: CodeBracketIcon,
    title: "Programming",
    description:
      "Menguasai berbagai bahasa pemrograman untuk pengembangan web, aplikasi, dan sistem.",
    technologies: [
      { name: "C", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="h-5 w-5" alt="C" /> },
      { name: "C#", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" className="h-5 w-5" alt="C#" /> },
      { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="h-5 w-5" alt="Python" /> },
      { name: "Dart", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="h-5 w-5" alt="Dart" /> },
      { name: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="h-5 w-5" alt="Java" /> },
      { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-5 w-5" alt="JavaScript" /> },
      { name: "PHP", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className="h-5 w-5" alt="PHP" /> },
      { name: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-5 w-5" alt="CSS" /> },
      { name: "Go", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" className="h-5 w-5" alt="Go" /> },
    ]
  },
  {
    icon: CpuChipIcon,
    title: "Frameworks & Libraries",
    description:
      "Menggunakan berbagai framework dan library modern untuk membangun aplikasi yang cepat dan scalable.",
    technologies: [
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "React JS", icon: <SiReact className="text-blue-500" /> },

      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ]
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Database & Query",
    description:
      "Mampu mengelola dan merancang database relasional maupun non-relasional dengan efisien.",
    technologies: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },

      { name: "SQLite", icon: <SiSqlite className="text-gray-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },

    ]
  },
  {
    icon: EyeIcon,
    title: "Version Control & Tools",
    description:
      "Menggunakan alat bantu untuk kolaborasi, version control, dan pengembangan aplikasi berbasis cloud.",
    technologies: [
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-black" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Development",
    description:
      "Mengembangkan aplikasi mobile multiplatform yang efisien dan menarik menggunakan teknologi modern.",
    technologies: [
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" /> },
    ]
  },
  {
    icon: CommandLineIcon,
    title: "Other Technical Skills",
    description:
      "Kumpulan keahlian teknis lain yang mendukung pengembangan software modern secara menyeluruh.",
    technologies: [
      { name: "RESTful API", icon: <BiNetworkChart className="text-green-600" /> },
      { name: "Postman", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="h-5 w-5" /> },
      { name: "Testing (Jest)", icon: <SiJest className="text-pink-600" /> },
      { name: "CI/CD", icon: <SiGithub className="text-black" /> },
      { name: "Web Optimization", icon: <SiReact className="text-blue-400" /> },
      { name: "Authentication", icon: <SiFirebase className="text-yellow-500" /> },
    ]
  }
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
          Layanan Berdasarkan Kategori Keahlian
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-600 lg:w-3/4 xl:w-1/2 leading-relaxed"
        >
          Keahlian saya mencakup berbagai bidang pengembangan perangkat lunak modern.
          Di bawah ini adalah rangkuman kompetensi berdasarkan kategori utama.
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
