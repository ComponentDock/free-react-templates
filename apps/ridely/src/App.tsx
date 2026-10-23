import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Ridely — Taxi Booking Form Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport white page, card vertically
            centered — NO navbar, NO hero copy (the reference is a bare
            booking form section, plus the Component Dock credit strip
            below). */}
        <section id="booking" className="flex min-h-screen items-center justify-center">
          <BookingForm />
        </section>
      </main>
      <footer className="border-t border-ash bg-white py-5 text-center text-[13px] text-coal">
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
