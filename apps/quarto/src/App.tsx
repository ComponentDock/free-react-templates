import { About } from './components/About'
import { ContactPanel } from './components/ContactPanel'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Work } from './components/Work'

export function App() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-5 top-[-100px] z-[100] bg-white p-3 text-ink focus:top-[10px]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div className="q-container">
          <Hero />
          <Work />
          <About />
          <Experience />
          <ContactPanel />
        </div>
      </main>
      <Footer />
    </>
  )
}
