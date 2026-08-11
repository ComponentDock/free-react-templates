import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded picsum placeholder for the source tropical-resort photograph
   (the original background.jpg must not be copied). Seed innly-10 verified:
   a wooden dock over calm water at sunset — resort-appropriate and
   harmonizing with the bronze brand color. */
const SECTION_IMAGE = 'https://picsum.photos/seed/innly-10/1600/900'

export function App() {
  useEffect(() => {
    document.title = 'Innly — Resort Reservation Form Template'
  }, [])

  return (
    <main>
      {/* Single-section demo: full-viewport resort photo dimmed by a light
          20% black scrim, vertically centered WHITE card — NO navbar, NO
          hero copy, NO footer (source is a bare booking form section). */}
      <section
        id="booking"
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${SECTION_IMAGE}')` }}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-black/20" />
        <div className="relative w-full px-[15px]">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
