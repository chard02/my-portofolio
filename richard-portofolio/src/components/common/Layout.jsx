import { useEffect } from 'react'

export function Layout({ children }) {
  useEffect(() => {
    // Animasi elemen saat di-scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
      {children}
    </div>
  )
}

export default Layout