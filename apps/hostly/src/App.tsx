import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Hostly — Travel Booking Widget Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport section on the light warm-taupe
            wash rgba(133,104,73,0.33) vertically centering the white booking
            card — NO navbar and NO hero copy (the source is a bare booking
            form section); a slim Component Dock credit bar closes the page. */}
        <section
          id="booking"
          className="flex min-h-screen items-center justify-center bg-brand/33 px-[15px] py-10"
        >
          <BookingForm />
        </section>
      </main>
      <footer className="border-t border-mist bg-white py-6 text-center text-[13px] text-ink">
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
