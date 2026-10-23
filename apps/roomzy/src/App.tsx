import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Roomzy — Hotel Booking Template'
  }, [])

  return (
    <>
      <main>
        <section
          id="booking"
          className="flex min-h-screen items-center justify-center bg-white px-4 py-10"
        >
          <BookingForm />
        </section>
      </main>
      <footer className="border-t border-black/5 bg-white py-6 text-center text-[13px] text-neutral-500">
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
