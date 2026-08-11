import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source night-city street photograph
   (the original background.jpg must not be copied). */
const SECTION_IMAGE = 'https://picsum.photos/seed/triply-1/1600/900'

export function App() {
  useEffect(() => {
    document.title = 'Triply — Taxi Booking Form Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport night-city photo dimmed by a 70%
          black scrim, vertically centered near-black solid card — NO navbar,
          NO hero copy, NO footer (source is a bare booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/70" />
        <div className="relative w-full px-[15px]">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
