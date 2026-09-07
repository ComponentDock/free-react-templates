import { useEffect } from 'react'
import { WizardCard } from './components/WizardCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dispel — Sign Up Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page font-sans text-ink">
      <main className="flex flex-1 items-center justify-center px-4 py-[60px]">
        <WizardCard />
      </main>
      <Footer />
    </div>
  )
}
