import { useState, useEffect } from 'react'
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react"

// Import icon dari Heroicons
import {
  CodeBracketIcon,
  UserCircleIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid"

const NAV_MENU = [
  {
    name: "Beranda",
    href: "#hero",
    icon: Squares2X2Icon,
  },
  {
    name: "Keahlian",
    href: "#skills",
    icon: CodeBracketIcon,
  },
  {
    name: "Proyek",
    href: "#projects",
    icon: DocumentTextIcon,
  },
  {
    name: "Tentang",
    href: "#resume",
    icon: UserCircleIcon,
  },
  {
    name: "Kontak",
    href: "#contact",
    icon: UserCircleIcon,
  },
]

function NavItem({ children, href, active }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        className={`flex items-center gap-2 font-medium transition-all duration-300 ${
          active 
            ? 'text-blue-500' 
            : 'text-gray-900 hover:text-blue-500'
        }`}
      >
        {children}
      </Typography>
    </li>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const handleOpen = () => setOpen((cur) => !cur)

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false)
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Detect active section for nav highlighting
      const sections = NAV_MENU.map(item => item.href.substring(1))
      
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <MTNavbar 
      shadow={scrolled}
      fullWidth 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-2 bg-white/90 backdrop-blur-sm shadow-md" 
          : "py-5 bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-xl font-bold relative group">
          <span className="text-blue-500">Dev</span>Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
        </Typography>
        <ul className="ml-10 hidden items-center gap-10 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem 
              key={name} 
              href={href}
              active={activeSection === href.substring(1)}
            >
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#contact">
            <Button 
              color="blue" 
              size="md" 
              className="rounded-full px-6 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              Hubungi Saya
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 border-t border-gray-200 px-2 pt-5 pb-2">
          <ul className="flex flex-col gap-5">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem 
                key={name} 
                href={href}
                active={activeSection === href.substring(1)}
              >
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-8 mb-4 flex items-center gap-2">
            <a href="#contact" className="w-full">
              <Button 
                color="blue" 
                size="md" 
                fullWidth
                className="rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                Hubungi Saya
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default Navbar