import { useEffect } from 'react'
import { BookingForm } from './components/BookingForm'

export function App() {
  useEffect(() => {
    document.title = 'Nestly — Hotel Reservation Template'
  }, [])

  return (
    <>
      <main>
        {/* Single-section demo: full-viewport section with a full-bleed
            cover/center beach photo (NO overlay/scrim — the source photo
            shows at full saturation), vertically centering the WHITE
            horizontal booking bar. The reference is a bare booking-form
            section, so there is no navbar; the page closes with the slim
            Component Dock footer. */}
        <section
          id="booking"
          className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/nestly-paradise/1920/1080')" }}
        >
          <div className="relative z-10 mx-auto w-full max-w-[1140px] px-[15px] py-10">
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5e5e5] bg-white py-6 text-center text-[13px] text-[#6b6b6b]">
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
