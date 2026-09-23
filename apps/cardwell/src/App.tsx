import { useEffect } from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cardwell — Personal vCard & Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-body-bg font-sans text-heading">
      <Header />
      <main>
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
