import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Stayly — Booking Form Template'
  }, [])

  return (
    <main>
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-mist px-4 py-10"
      >
        <BookingForm />
      </section>
    </main>
  )
}
