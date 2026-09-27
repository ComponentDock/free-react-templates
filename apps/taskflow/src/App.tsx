import { Sidebar } from './components/Sidebar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Blog } from './components/Blog'
import { CtaSection } from './components/CtaSection'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[rgba(0,0,0,0.7)]">
      <Sidebar />
      <div className="ml-[280px] min-h-screen">
        <main>
          <HeroSlider />
          <About />
          <Services />
          <Portfolio />
          <Blog />
          <CtaSection />
        </main>
      </div>
    </div>
  )
}
