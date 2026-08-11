import { useEffect } from 'react'
import { ReservationForm } from './components/ReservationForm'

export function App() {
  useEffect(() => {
    document.title = 'Dozely — Hotel Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section on a plain WHITE page
          (the source #booking has NO page-level background — the resort
          photo lives INSIDE the card), vertically centering the booking
          card; NO navbar, NO footer (source is a bare booking form
          section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
      >
        <ReservationForm />
      </section>
    </main>
  )
}
