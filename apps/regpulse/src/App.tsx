import { useEffect } from 'react'
import { BookingCard } from './components/BookingCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regpulse — Dinner Event Booking'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans" style={{ backgroundColor: '#ffd9b0' }}>
      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <BookingCard />
      </main>
      <Footer />
    </div>
  )
}
