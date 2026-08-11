import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source tropical-resort photograph (the
   original background.jpg must not be copied). */
const SECTION_IMAGE = 'https://picsum.photos/seed/lodgely-1/1600/900'

export function App() {
  useEffect(() => {
    document.title = 'Lodgely — Hotel Booking Widget Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport tropical-resort photo dimmed by a
          60% black scrim, vertically centered dark form panel — NO navbar,
          NO hero copy, NO footer (source is a bare booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center font-sans"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="relative w-full px-[15px]">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
