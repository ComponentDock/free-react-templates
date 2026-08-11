import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Hostly — Travel Booking Widget Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport section on the light warm-taupe
          wash rgba(133,104,73,0.33) vertically centering the white booking
          card — NO navbar, NO hero copy, NO footer (source is a bare booking
          form section). */}
      <section
        id="booking"
        className="flex min-h-screen items-center justify-center bg-brand/33 px-[15px] py-10"
      >
        <BookingForm />
      </section>
    </main>
  )
}
