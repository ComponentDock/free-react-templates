import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Support } from './components/Support'
import { ApplicationForm } from './components/ApplicationForm'
import { Team } from './components/Team'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Support />
        <ApplicationForm />
        <Team />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
