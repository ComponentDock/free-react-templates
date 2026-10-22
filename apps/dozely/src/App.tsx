import { useEffect } from 'react'
import { ReservationForm } from './components/ReservationForm'

export function App() {
  useEffect(() => {
    document.title = 'Dozely — Hotel Booking Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport section on a plain WHITE page
            (the source #booking has NO page-level background — the resort
            photo lives INSIDE the card), vertically centering the booking
            card; no navbar (source is a bare booking form section). */}
        <section
          id="booking"
          className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
        >
          <ReservationForm />
        </section>
      </main>
      <footer className="border-t border-brand/20 bg-white py-6 text-center text-[13px] text-neutral-600">
        <p>
          More templates at{' '}
          <a
            className="font-semibold text-deep underline-offset-4 hover:underline"
            href="https://www.componentdock.com/"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </>
  )
}
