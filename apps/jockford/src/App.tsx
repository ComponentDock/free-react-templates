import { useState, useEffect, useCallback } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const sections = [
  'home',
  'about',
  'services',
  'skills',
  'education',
  'experience',
  'work',
  'blog',
  'contact',
]

export function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleDark = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )

    sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar darkMode={darkMode} onToggleDark={toggleDark} activeSection={activeSection} />

      <main className="flex-1 lg:ml-[250px]">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Work />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
