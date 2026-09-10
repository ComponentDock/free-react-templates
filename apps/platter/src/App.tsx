import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { ReservationWizard } from './components/ReservationWizard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Platter — Restaurant Reservation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface-50 text-surface-900 transition-colors">
      <Navbar />
      <main className="flex-1">
        <ReservationWizard />
      </main>
      <Footer />
    </div>
  )
}
