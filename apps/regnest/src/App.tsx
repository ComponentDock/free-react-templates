import { useEffect } from 'react'
import { BookingCard } from './components/BookingCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regnest — Booking Ticket Registration'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex flex-1 items-center justify-center bg-brand px-4 py-12">
        <BookingCard />
      </main>
      <Footer />
    </div>
  )
}
