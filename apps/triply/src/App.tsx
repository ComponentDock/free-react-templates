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
    <>
      <main>
        {/* Single-section demo: full-viewport night-city photo dimmed by a 70%
          black scrim, vertically centered near-black solid card — NO navbar,
          NO hero copy (the reference is a bare booking form section) — only
          the repo-standard credit footer follows. */}
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
      <footer className="bg-coal py-6 text-center text-[13px] text-white/70">
        <p>
          More templates at{' '}
          <a
            className="font-semibold text-brand underline-offset-4 hover:underline"
            href="https://www.componentdock.com/"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </>
  )
}
