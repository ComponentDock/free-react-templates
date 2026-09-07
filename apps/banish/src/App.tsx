import { useEffect } from 'react'
import { WizardCard } from './components/WizardCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Banish — Registration Wizard'
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-bottom font-sans text-ink"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/banish-bg/1400/939)',
      }}
    >
      <main className="flex flex-1 items-center justify-center">
        <WizardCard />
      </main>
      <Footer />
    </div>
  )
}
