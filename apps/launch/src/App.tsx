import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { AuthModal } from './components/AuthModal'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Launch — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar onSignIn={() => setModalOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Pricing />
        <Features />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <AuthModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
