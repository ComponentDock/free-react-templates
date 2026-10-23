import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Guestly — Room Reservation Widget Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport section on the WHITE page
            background vertically centering the near-black booking card — NO
            navbar and NO hero copy (the source is a bare booking form
            section); a slim Component Dock footer closes the page. */}
        <section
          id="booking"
          className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
        >
          <BookingForm />
        </section>
      </main>
      <footer className="border-t border-black/10 bg-white py-6 text-center text-[13px] text-panel/70">
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
