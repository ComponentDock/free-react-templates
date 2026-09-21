import { OffcanvasMenu } from './components/OffcanvasMenu'
import { HeroAccordion } from './components/HeroAccordion'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-surface-dark">
      <OffcanvasMenu />
      <main>
        <HeroAccordion />
      </main>
      <Footer />
    </div>
  )
}
