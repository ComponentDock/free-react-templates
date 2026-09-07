import { useEffect } from 'react'
import { WizardCard } from './components/WizardCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Conjure — Registration Wizard'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <main className="flex flex-1 items-center justify-center">
        <WizardCard />
      </main>
      <Footer />
    </div>
  )
}
