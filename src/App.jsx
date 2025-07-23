import { useEffect } from 'react'
import { Layout } from './components/common/Layout'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        if (targetId !== '#') {
          document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App