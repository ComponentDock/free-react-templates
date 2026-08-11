import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

/* Seeded placeholder hero photo — the source background.jpg must not be
   copied (dusk/bridge-like landscape). */
const HERO_IMAGE = 'https://picsum.photos/seed/roostly-1/1920/1080'

export function App() {
  useEffect(() => {
    document.title = 'Roostly — Travel Booking Template'
  }, [])

  return (
    <main>
      <section
        id="booking"
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      >
        {/* Translucent white wash (rgba(255,255,255,0.15)) — NOT a color tint. */}
        <div aria-hidden="true" className="absolute inset-0 bg-white/15" />
        <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
