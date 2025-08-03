import { useState } from 'react'
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  Alert,
} from "@material-tailwind/react"
import {
  EnvelopeIcon,
  PhoneIcon,
  TicketIcon,
} from "@heroicons/react/24/solid"

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interest: 'design',
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }
  
  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, interest: value }))
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Nama depan diperlukan'
    if (!formData.lastName.trim()) newErrors.lastName = 'Nama belakang diperlukan'
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email diperlukan'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    
    if (!formData.message.trim()) newErrors.message = 'Pesan diperlukan'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulasi pengiriman data
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form data:', formData)
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: 'design',
        message: '',
      })
      
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  const contactItems = [
    { icon: <PhoneIcon className="h-5 w-5 text-white" />, text: "+62 852 6159 1160", href: "tel:+62 852 6159 1160" },
    { icon: <EnvelopeIcon className="h-5 w-5 text-white" />, text: "paulusaritonang002@gmail.com", href: "mailto:paulusaritonang002@gmail.com" },
    { icon: <TicketIcon className="h-5 w-5 text-white" />, text: "Buka Tiket Support", href: "#support" }
  ]
  
  const socialItems = [
    { icon: "fab fa-facebook-f", href: "https://facebook.com" },
    { icon: "fab fa-instagram", href: "https://instagram.com" },
    { icon: "fab fa-github", href: "https://github.com" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com" }
  ]
  
  const interestOptions = [
    { label: 'Desain', value: 'design' },
    { label: 'Pengembangan', value: 'development' },
    { label: 'Support', value: 'support' },
    { label: 'Lainnya', value: 'other' }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center">
            <span className="px-4 py-1.5 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold inline-block mb-3 shadow-sm">
              Hubungi Saya
            </span>
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-3 text-3xl font-bold tracking-tight">
            Diskusikan Proyek Anda
          </Typography>
          <Typography className="mx-auto max-w-2xl text-gray-600 leading-relaxed">
            Siap untuk memulai? Jangan ragu untuk menghubungi saya melalui formulir kontak.
          </Typography>
        </div>

        <Card className="overflow-hidden border-0 shadow-lg rounded-xl">
          <CardBody className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Sidebar Info */}
              <div className="col-span-4 bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-12 relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJoNnptLTYgNmMwLTYuNjI3LTUuMzczLTEyLTEyLTEydjZjMy4zMTQgMCA2IDIuNjg2IDYgNmg2eiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
                
                <div className="relative z-10">
                  <Typography variant="h4" color="white" className="mb-4 font-bold text-2xl">
                    Informasi Kontak
                  </Typography>
                  <Typography className="mb-10 text-blue-100 opacity-90 leading-relaxed">
                    Isi formulir dan tim saya akan menghubungi Anda dalam waktu 24 jam.
                  </Typography>
                  
                  <div className="space-y-6 mb-12">
                    {contactItems.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.href}
                        className="flex items-center gap-4 group transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="h-10 w-10 rounded-full bg-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/50 transition-all duration-300">
                          {item.icon}
                        </div>
                        <Typography color="white" className="font-medium tracking-wide group-hover:text-blue-100 transition-colors duration-300">
                          {item.text}
                        </Typography>
                      </a>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-blue-500/30">
                    {socialItems.map((item, index) => (
                      <a 
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Social media link ${index + 1}`}
                        className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <i className={`${item.icon} text-white`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="col-span-8 p-8 lg:p-12">
                {isSubmitted && (
                  <Alert color="green" className="mb-6 rounded-lg border-l-4 border-green-500 bg-green-50 font-medium animate-fade-in-down">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                    </div>
                  </Alert>
                )}
                
                <div className="max-w-3xl">
                  <div className="grid gap-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          color="blue"
                          size="lg"
                          label="Nama Depan"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          error={!!errors.firstName}
                          className="focus:border-blue-500"
                          containerProps={{ className: "min-w-[100px]" }}
                        />
                        {errors.firstName && (
                          <Typography variant="small" color="red" className="mt-1 text-xs flex items-center">
                            <span className="mr-1">•</span> {errors.firstName}
                          </Typography>
                        )}
                      </div>
                      <div>
                        <Input
                          color="blue"
                          size="lg"
                          label="Nama Belakang"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          error={!!errors.lastName}
                          className="focus:border-blue-500"
                          containerProps={{ className: "min-w-[100px]" }}
                        />
                        {errors.lastName && (
                          <Typography variant="small" color="red" className="mt-1 text-xs flex items-center">
                            <span className="mr-1">•</span> {errors.lastName}
                          </Typography>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Input
                        color="blue"
                        size="lg"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        className="focus:border-blue-500"
                      />
                      {errors.email && (
                        <Typography variant="small" color="red" className="mt-1 text-xs flex items-center">
                          <span className="mr-1">•</span> {errors.email}
                        </Typography>
                      )}
                    </div>
                  </div>
                  
                  <Typography className="text-blue-gray-700 font-medium mb-3">
                    Apa yang Anda butuhkan?
                  </Typography>
                  
                  <div className="grid grid-cols-2 gap-5 mb-8">
                    {interestOptions.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <Radio
                          name="interest"
                          color="blue"
                          label={option.label}
                          value={option.value}
                          checked={formData.interest === option.value}
                          onChange={() => handleRadioChange(option.value)}
                          containerProps={{ className: "p-0" }}
                          className="p-0 hover:before:opacity-0"
                          labelProps={{ className: "font-medium text-gray-700" }}
                          icon={
                            <div className="border-2 border-blue-500 w-4 h-4 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                          }
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-8">
                    <Textarea
                      color="blue"
                      size="lg"
                      label="Pesan Anda"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      className="min-h-[160px] focus:border-blue-500"
                    />
                    {errors.message && (
                      <Typography variant="small" color="red" className="mt-1 text-xs flex items-center">
                        <span className="mr-1">•</span> {errors.message}
                      </Typography>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      className="px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
                      color="blue"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting && (
                        <span className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></span>
                      )}
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default Contact