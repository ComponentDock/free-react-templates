import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Guestly — Room Reservation Widget Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section on the WHITE page
          background vertically centering the near-black booking card — NO
          navbar, NO hero copy, NO footer (source is a bare booking form
          section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
      >
        <BookingForm />
      </section>
    </main>
  )
}
