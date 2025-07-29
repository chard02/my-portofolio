import { useState } from 'react'
import { Typography, Button, Tabs, TabsHeader, Tab, TabsBody, TabPanel } from "@material-tailwind/react"
import ResumeItem from "../components/ui/ResumeItem"
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CommandLineIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid"

const EDUCATION = [
  {
    period: "July 2022 - Sept 2025",
    title: "Diploma III Teknologi Informasi",
    institution: "Institut Teknologi Del, Toba, Sumatera Utara",
    description: "",
  },
  {
    period: "Jul 2018 - May 2021",
    title: "Teknik Elektronika Audio Video",
    institution: "SMK/STM Pematang Siantar, Sumatera Utara",
    description: "",
  },
]

const EXPERIENCE = [
  {
    period: "2019 - 2021",
    title: "Teknisi Elektro",
    institution: "Hexsa Service, Pematang Siantar",
    description: "",
  },
  {
    period: "Sept 2024 - Dec 2024",
    title: "Web Developer (Scrum Master)",
    institution: "Batam, Kepulauan Riau",
    description: "",
  },
  {
    period: "Jan 2025 - Jun 2025",
    title: "Project Pengembangan Website TSTH2",
    institution: "Institut Teknologi Del",
    description: `Project ini fokus pada pengembangan website untuk Research Center TSTH2, bertujuan mengelola data riset, publikasi ilmiah, dan profil peneliti secara terstruktur. Menggunakan Laravel 10 (backend RESTful API) dan Bootstrap (UI). Website ini ditujukan untuk mendukung efisiensi, transparansi, dan kolaborasi antar peneliti di lingkungan TSTH2. (tsth2.web.id)`,
  },
]

const SKILLS = [
  {
    category: "Programming",
    items: [
      { name: "C", level: 80 },
      { name: "C#", level: 75 },
      { name: "Dart", level: 80 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Laravel", level: 85 },
      { name: "React JS", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Database & Query",
    items: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    category: "Version Control & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", level: 80 },
    ],
  },
  {
    category: "Other Technical Skills",
    items: [
      { name: "RESTful API", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
]

function Resume() {
  const [activeTab, setActiveTab] = useState("education")

  return (
    <section id="resume" className="px-8 py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/src/assets/dot-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 relative z-10">
        <div className="col-span-1 animate-on-scroll">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold">
              Resume
            </span>
          </div>
          <Typography variant="h2" color="blue-gray" className="text-3xl lg:text-4xl font-bold mb-5">
            Resume Saya
          </Typography>
          <Typography className="mb-6 w-full font-normal !text-gray-600 lg:w-10/12 leading-relaxed">
            Pengembang Web terampil dan kreatif dengan pengalaman 1+ tahun dalam merancang
            website dan aplikasi web yang memukau secara visual dan kuat secara fungsional.
            Memiliki keahlian dalam berbagai bahasa pemrograman, framework, dan alat pengembangan.
            Berkomitmen untuk memberikan solusi inovatif yang memenuhi kebutuhan klien dan pengguna.
          </Typography>

          <div className="flex flex-wrap gap-5 mt-10">
            <Button
              color="blue"
              className="flex items-center gap-3 rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>

            <Button
              variant="outlined"
              color="blue"
              className="flex items-center gap-3 rounded-full px-6 py-3 transition-all duration-300 hover:bg-blue-50 group"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Hubungi Saya
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="col-span-1 animate-on-scroll">
          <Tabs value={activeTab} className="overflow-visible">
            <TabsHeader
              className="bg-gray-100 rounded-xl p-1"
              indicatorProps={{
                className: "bg-blue-500 shadow-md !text-white rounded-lg",
              }}
            >
              <Tab
                value="education"
                onClick={() => setActiveTab("education")}
                className={`py-3.5 px-5 font-medium ${activeTab === "education"
                    ? "text-white"
                    : "text-gray-700 hover:text-blue-500"
                  } transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="h-5 w-5" />
                  Pendidikan
                </div>
              </Tab>
              <Tab
                value="experience"
                onClick={() => setActiveTab("experience")}
                className={`py-3.5 px-5 font-medium ${activeTab === "experience"
                    ? "text-white"
                    : "text-gray-700 hover:text-blue-500"
                  } transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="h-5 w-5" />
                  Pengalaman
                </div>
              </Tab>
              <Tab
                value="skills"
                onClick={() => setActiveTab("skills")}
                className={`py-3.5 px-5 font-medium ${activeTab === "skills"
                    ? "text-white"
                    : "text-gray-700 hover:text-blue-500"
                  } transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <CommandLineIcon className="h-5 w-5" />
                  Keahlian
                </div>
              </Tab>
            </TabsHeader>
            <TabsBody>
              <TabPanel value="education" className="px-2">
                <div className="grid gap-y-10 pt-4">
                  {EDUCATION.map((item, idx) => (
                    <ResumeItem
                      key={idx}
                      period={item.period}
                      title={item.title}
                      institution={item.institution}
                      description={item.description}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="experience" className="px-2">
                <div className="grid gap-y-10 pt-4">
                  {EXPERIENCE.map((item, idx) => (
                    <ResumeItem
                      key={idx}
                      period={item.period}
                      title={item.title}
                      institution={item.institution}
                      description={item.description}
                    />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="skills" className="px-2">
                <div className="grid gap-8 pt-6 md:grid-cols-2">
                  {SKILLS.map((skillGroup, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
                      <Typography variant="h6" color="blue-gray" className="mb-5 font-semibold">
                        {skillGroup.category}
                      </Typography>
                      <div className="space-y-6">
                        {skillGroup.items.map((skill, skillIdx) => (
                          <div key={skillIdx}>
                            <div className="flex justify-between mb-2">
                              <Typography className="font-medium text-gray-700">
                                {skill.name}
                              </Typography>
                              <Typography className="font-medium text-blue-500">
                                {skill.level}%
                              </Typography>
                            </div>
                            <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1500 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Resume