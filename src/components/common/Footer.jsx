import { useState } from 'react'
import { Typography, Button, Input, Tooltip } from "@material-tailwind/react"

const NAVIGATION = {
  main: [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#resume" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ],
  social: [
    { name: "Facebook", icon: "fab fa-facebook-f", href: "https://facebook.com" },
    { name: "Instagram", icon: "fa fa-instagram", href: "https://instagram.com" },
    { name: "Twitter", icon: "fab fa-twitter", href: "https://twitter.com" },
    { name: "GitHub", icon: "fab fa-github", href: "https://github.com" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", href: "https://linkedin.com" },
  ],
}

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      // Implement subscription logic here
      setIsSubscribed(true)
      setEmail('')
      
      setTimeout(() => {
        setIsSubscribed(false)
      }, 5000)
    }
  }
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-8 pt-24 pb-10 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 lg:col-span-1">
            <Typography variant="h5" className="mb-6 font-bold relative inline-block">
              <span className="text-blue-500">Dev</span>Portfolio
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-blue-500 rounded-full"></span>
            </Typography>
            <Typography className="mb-8 font-normal text-gray-400 max-w-xs leading-relaxed">
              Pengembang web profesional yang berdedikasi untuk memberikan solusi digital
              berkualitas tinggi untuk klien dari berbagai industri.
            </Typography>
            <div className="flex space-x-5">
              {NAVIGATION.social.map((item) => (
                <Tooltip key={item.name} content={item.name} placement="top" className="bg-blue-500">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                  >
                    <i className={item.icon}></i>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <Typography variant="h6" className="mb-6 font-semibold relative inline-block">
              Navigasi
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500 rounded-full"></span>
            </Typography>
            <ul className="space-y-4">
              {NAVIGATION.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-normal text-gray-400 transition-all duration-300 hover:text-blue-500 hover:pl-1 flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-blue-500 mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <Typography variant="h6" className="mb-6 font-semibold relative inline-block">
              Kontak
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-blue-500 rounded-full"></span>
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <Typography className="font-normal text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  Jakarta, Indonesia
                </Typography>
              </li>
              <li className="flex items-start group">
                <i className="fas fa-phone text-blue-500 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <Typography className="font-normal text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  +62 812 3456 7890
                </Typography>
              </li>
              <li className="flex items-start group">
                <i className="fas fa-envelope text-blue-500 mt-1 mr-3 transition-transform duration-300 group-hover:scale-110"></i>
                <Typography className="font-normal text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  hello@richard.com
                </Typography>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-20 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-800 py-8 md:justify-between">
          <Typography className="text-center font-normal text-gray-500 transition-colors duration-300 hover:text-gray-400">
            &copy; {currentYear} richard. All rights reserved.
          </Typography>
          <Typography className="text-center font-normal text-gray-500 transition-colors duration-300 hover:text-gray-400">
            <span className="text-blue-500">Richard</span> Paulus
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Footer