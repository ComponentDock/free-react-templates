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
    <>
      <main>
        {/* Single-section demo: full-viewport resort photo dimmed by a light
          20% black scrim, vertically centered WHITE card — no navbar and no
          hero copy (the source is a bare booking form section); a slim
          Component Dock footer closes the page. */}
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
      {/* Single-section booking demo — a slim footer carries the Component
          Dock credit without inventing a design section. */}
      <footer className="border-t border-mist bg-white py-6 text-center text-[13px] text-slate">
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
