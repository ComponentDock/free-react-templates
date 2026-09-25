import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Counters } from './components/Counters'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Work } from './components/Work'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="md:ml-[280px]">
        <Hero />
        <About />
        <Counters />
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
