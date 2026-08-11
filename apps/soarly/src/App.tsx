import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Soarly — Flight Booking Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section on a plain WHITE page
          (the source #booking has NO page-level background — this variant
          has no photo anywhere, the card is SOLID charcoal), vertically
          centering the booking card; NO navbar, NO footer (source is a
          bare booking form section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
      >
        <BookingForm />
      </section>
    </main>
  )
}
