import { useEffect } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { PhotoGrid } from './components/PhotoGrid'
import { Testimonials } from './components/Testimonials'
import { Biography } from './components/Biography'
import { Blog } from './components/Blog'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lens — Photography Portfolio Template'
  }, [])

  return (
    <div className="bg-black text-gray">
      <Sidebar />
      <main className="ml-0 lg:ml-[250px]">
        <Hero />
        <PhotoGrid />
        <Testimonials />
        <Biography />
        <Blog />
        <ContactForm />
      </main>
      <div className="lg:ml-[250px]">
        <Footer />
      </div>
    </div>
  )
}
