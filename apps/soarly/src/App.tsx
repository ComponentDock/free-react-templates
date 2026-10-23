import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Soarly — Flight Booking Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport section on a plain WHITE page
          (the source #booking has NO page-level background — this variant
          has no photo anywhere, the card is SOLID charcoal), vertically
          centering the booking card; NO navbar (the reference is a bare
          booking-form section); the Component Dock credit line sits below it. */}
        <section
          id="booking"
          className="flex min-h-screen items-center justify-center bg-white px-[15px] py-10"
        >
          <BookingForm />
        </section>
      </main>
      <footer className="border-t border-black/10 bg-white py-6 text-center text-[13px] text-ink">
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
