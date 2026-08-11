import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Roomzy — Hotel Booking Template'
  }, [])

  return (
    <main>
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-white px-4 py-10"
      >
        <BookingForm />
      </section>
    </main>
  )
}
