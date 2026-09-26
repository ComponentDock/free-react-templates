import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Biography } from './components/Biography'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [activeSection, setActiveSection] = useState('section-home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Lumier — Photography Template'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'section-home',
        'section-photos',
        'section-bio',
        'section-blog',
        'section-contact',
      ]
      const scrollPos = window.scrollY + 200

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Sidebar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />
      <main className="ml-0 lg:ml-[250px] w-full lg:w-[calc(100%-250px)]">
        <Hero />
        <div className="px-4 lg:px-0">
          <Gallery />
        </div>
        <Testimonials />
        <Biography />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
