import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { IconBoxes } from './components/IconBoxes'
import { Welcome } from './components/Welcome'
import { Events } from './components/Events'
import { CausesSlider } from './components/CausesSlider'
import { Milestones } from './components/Milestones'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink antialiased">
      <div data-section="header">
        <Header />
      </div>
      <main>
        <div data-section="hero">
          <HeroSlider />
        </div>
        <div data-section="icon-boxes">
          <IconBoxes />
        </div>
        <div data-section="welcome">
          <Welcome />
        </div>
        <div data-section="events">
          <Events />
        </div>
        <div data-section="causes">
          <CausesSlider />
        </div>
        <div data-section="milestones">
          <Milestones />
        </div>
      </main>
      <div data-section="footer">
        <Footer />
      </div>
    </div>
  )
}
