import { useEffect } from 'react'
import { WizardCard } from './components/WizardCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Runic — Onboarding Wizard'
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        background: 'linear-gradient(to bottom, #b8c6f0 0%, #d4b8e8 50%, #f0c8dc 100%)',
      }}
    >
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <WizardCard />
      </main>
      <Footer />
    </div>
  )
}
