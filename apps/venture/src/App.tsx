import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WantToWork } from './components/WantToWork'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { ProjectGallery } from './components/ProjectGallery'
import { Testimonials } from './components/Testimonials'
import { Features } from './components/Features'
import { Blog } from './components/Blog'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Venture — Business Startup Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WantToWork
          subtitle="Once you've settled on a business"
          title="High Performance Services For Multiple Industries."
        />
        <Services />
        <Skills />
        <WantToWork
          subtitle="Works That We Done Recently"
          title="All startups need to make their business work"
        />
        <ProjectGallery />
        <Testimonials />
        <Features />
        <WantToWork
          subtitle="Once you've settled on a business"
          title="High Performance Services For Multiple Industries."
        />
        <Blog />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
