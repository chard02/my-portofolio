import { useState } from 'react'
import { Input, Button, Typography, Alert } from "@material-tailwind/react"

function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Mohon masukkan email yang valid')
      return
    }
    
    setSubmitted(true)
    setError('')
    // Di sini bisa ditambahkan logika untuk mengirim email ke backend
  }

  return (
    <header id="hero" className="relative bg-white py-28 lg:py-36 overflow-hidden">
      {/* Background pattern decorations */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-50 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-50 translate-x-1/2 translate-y-1/2 blur-3xl opacity-70"></div>
      
      <div className="container mx-auto grid h-full gap-16 min-h-[75vh] w-full grid-cols-1 items-center lg:grid-cols-2 px-8 relative z-10">
        <div className="animate-on-scroll">
          <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold">
              Web Developer
            </span>
          </div>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-8 text-4xl lg:text-5xl xl:text-6xl font-bold !leading-tight"
          >
            Hi! <span className="text-blue-500 relative inline-block">
              Kamu
              <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="6" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5C20.6667 1.66667 60.6667 -1 99 5" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span> Saya Richard
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 text-lg !text-gray-700 md:pr-16 xl:pr-28 leading-relaxed"
          >
            Saya Richard Paulus Aritonang seorang pengembang web profesional yang berdedikasi untuk menciptakan 
            pengalaman digital yang memukau dan fungsional. Mari wujudkan ide-ide Anda menjadi 
            kenyataan.
          </Typography>
          
          <div className="flex gap-5 mt-10">
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 group"
            >
              <span className="flex items-center">
                Hubungi Saya
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-gray-50 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 group"
            >
              <span className="flex items-center">
                Lihat Portofolio
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-y-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        
        <div className="animate-on-scroll hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-2xl"></div>
            <img
              src="/src/assets/image/pas photo.jpeg" 
              alt="Web Developer Workspace"
              className="h-[40rem] w-155 rounded-2xl object-cover shadow-xl relative z-10 border-4 border-white"
            />
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl z-20 border border-gray-100 animate-pulse">
              <Typography variant="h6" color="blue-gray" className="font-medium">
                <span className="text-blue-500 font-bold">1+</span> Tahun Pengalaman
              </Typography>
              <Typography variant="small" className="text-gray-700">
                Pengembangan Web Profesional
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero