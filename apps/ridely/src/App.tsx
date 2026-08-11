import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Ridely — Taxi Booking Form Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport white page, card vertically
          centered — NO navbar, NO hero copy, NO footer (source is a bare
          booking form section). */}
      <section id="booking" className="flex min-h-screen items-center justify-center">
        <BookingForm />
      </section>
    </main>
  )
}
